# layout

```sh
use iced::widget::{button, column, container, row, text};
use iced::{Background, Border, Color, Element, Length, Theme};

#[derive(Default)]
struct App;

#[derive(Debug, Clone)]
enum Message {
    New,
    Save,
    Exit,
}

const BORDER: Color = Color::from_rgb(
    0xEE as f32 / 255.0,
    0xEE as f32 / 255.0,
    0xEE as f32 / 255.0,
);

fn button_border_style() -> impl Fn(&Theme, button::Status) -> button::Style {
    |_, status| {
        let background = match status {
            button::Status::Hovered => Color::from_rgb8(245, 245, 245),
            button::Status::Pressed => Color::from_rgb8(235, 235, 235),
            _ => Color::WHITE,
        };

        button::Style {
            background: Some(Background::Color(background)),
            text_color: Color::BLACK,
            border: Border {
                color: BORDER,
                width: 1.0,
                radius: 8.0.into(),
            },
            ..Default::default()
        }
    }
}

impl App {
    fn view(&self) -> Element<'_, Message> {
        container(
            column![
                self.toolbar(),
                row![self.sidebar(), self.content()].height(Length::Fill),
                self.status_bar()
            ]
            .width(Length::Fill)
            .height(Length::Fill),
        )
        .into()
    }

    fn toolbar(&self) -> Element<'_, Message> {
        column![
            row![
                button("New").on_press(Message::New).style(|_, _| {
                    button::Style {
                        background: Some(Background::Color(Color::from_rgb8(0, 122, 255))),
                        text_color: Color::WHITE,
                        border: Border {
                            color: Color::TRANSPARENT,
                            width: 0.0,
                            radius: 8.0.into(),
                        },
                        ..Default::default()
                    }
                }),
                button("Save")
                    .on_press(Message::Save)
                    .style(button_border_style()),
                button("Exit").on_press(Message::Exit),
            ]
            .spacing(10)
            .padding(10),
            container("")
                .height(1)
                .width(Length::Fill)
                .style(|_| container::Style {
                    background: Some(iced::Background::Color(BORDER)),
                    ..Default::default()
                }),
        ]
        .into()
    }

    fn sidebar(&self) -> Element<'_, Message> {
        row![
            container(column![button("Home"), button("User"), button("Settings")].spacing(10))
                .width(200)
                .padding(10),
            container("")
                .width(1)
                .height(Length::Fill)
                .style(|_| container::Style {
                    background: Some(iced::Background::Color(BORDER)),
                    ..Default::default()
                }),
        ]
        .into()
    }

    fn content(&self) -> Element<'_, Message> {
        container(text!("New content").size(30))
            .width(Length::Fill)
            .height(Length::Fill)
            .center_x(Length::Fill)
            .center_y(Length::Fill)
            .into()
    }

    fn status_bar(&self) -> Element<'_, Message> {
        column![
            container("")
                .width(Length::Fill)
                .height(1)
                .style(|_| container::Style {
                    background: Some(iced::Background::Color(BORDER)),
                    ..Default::default()
                }),
            container(text!("Status bar").size(30))
                .padding(10)
                .width(Length::Fill)
        ]
        .into()
    }

    fn update(&mut self, _message: Message) {}
}

fn main() -> iced::Result {
    iced::application(App::default, App::update, App::view)
        .title("hello Iced")
        .run()
}

```

