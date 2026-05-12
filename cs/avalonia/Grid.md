# Grid


```sh
<Grid ShowGridLines="True" ColumnDefinitions="100,*,2*,Auto" RowDefinitions="100,*,2*,auto" RowSpacing="20">
        <Button VerticalAlignment="Stretch" HorizontalAlignment="Stretch">hello</Button>
        <Button Grid.Row="1" Grid.Column="1" Width="200" HorizontalAlignment="Center">world</Button>
        <Button Grid.Row="2" Grid.Column="2" Width="200">jim</Button>
</Grid>
```