# excel

install
```sh
cargo add calamine
```

basic use

```sh
use calamine::{Reader, open_workbook_auto};
use std::error::Error;

#[derive(Debug)]
struct Order {
    name: String,
    department: String,
    work_data: String,
    order_sn: String,
    user: String,
    company_name: String,
    company_type: String,
    goods_name: String,
    goods_type: String,
    unit: String,
    price: f64,
}

fn main() -> Result<(), Box<dyn Error>> {
    let mut workbook = open_workbook_auto("goods.xlsx")?;
    let sheet_name = workbook.sheet_names()[0].clone();
    if let Ok(range) = workbook.worksheet_range(&sheet_name) {
        let mut orders = Vec::new();
        for row in range.rows().skip(1) {
            let order = Order {
                name: row[0].to_string(),
                department: row[1].to_string(),
                work_data: row[2].to_string(),
                order_sn: row[3].to_string(),
                user: row[4].to_string(),
                company_name: row[5].to_string(),
                company_type: row[6].to_string(),
                goods_name: row[7].to_string(),
                goods_type: row[8].to_string(),
                unit: row[9].to_string(),
                price: row[10].to_string().parse()?,
            };

            orders.push(order);
        }
        println!("{:#?}", orders);
    }
    Ok(())
}

```