# menu

menu with file dialog

```sh
package main

import (
	"fmt"
	"os"

	"github.com/wailsapp/wails/v2/pkg/menu"
	"github.com/wailsapp/wails/v2/pkg/menu/keys"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func (a *App) getMenu() *menu.Menu {
	m := menu.NewMenu()
	fileMenu := m.AddSubmenu("文件")
	fileMenu.AddText("打开文件", keys.Control("o"), func(data *menu.CallbackData) {
		filePath, err := runtime.OpenFileDialog(a.ctx, runtime.OpenDialogOptions{
			Title: "Open File",
			Filters: []runtime.FileFilter{
				{
					DisplayName: "Image Files (*.jpg, *.png)",
					Pattern:     "*.jpg;*.png",
				},
			},
		})
		fmt.Println(filePath, err)
	})
	fileMenu.AddText("保存文件", &keys.Accelerator{}, func(data *menu.CallbackData) {
		filePath, err := runtime.SaveFileDialog(a.ctx, runtime.SaveDialogOptions{
			Title:            "Save File",
			DefaultDirectory: "/Users/wuqiang/Documents/go/wailsdemo",
			Filters: []runtime.FileFilter{
				{
					DisplayName: "Text Files (*.txt)",
					Pattern:     "*.txt",
				},
			},
		})
		fmt.Println(filePath, err)
		err = os.WriteFile(filePath, []byte(filePath+" hello"), os.ModePerm)
		if err != nil {
			fmt.Println(filePath, err)
			return
		}
	})
	fileMenu.AddText("退出", keys.Control("q"), func(data *menu.CallbackData) {
		fmt.Println("退出")
	})
	moreMenu := m.AddSubmenu("更多")
	moreMenu.AddText("关于", keys.Control("c"), func(data *menu.CallbackData) {})
	return m
}


func main() {
	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "wailsdemo",
		Width:  1024,
		Height: 768,
		Menu:   app.getMenu(),
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
```

menu with Clipboard


```sh
func (a *App) getClipboardMenu() *menu.Menu {
	m := menu.NewMenu()
	clipMenu := m.AddSubmenu("粘贴板")
	clipMenu.AddText("复制", &keys.Accelerator{}, func(data *menu.CallbackData) {
		err := runtime.ClipboardSetText(a.ctx, "clipboard="+time.Now().Format("2006-01-02 15:04:05"))
		if err != nil {
			return 
		}
	})
	clipMenu.AddText("粘贴", &keys.Accelerator{}, func(data *menu.CallbackData) {
		text, err := runtime.ClipboardGetText(a.ctx)
		if err != nil {
			fmt.Println(err)
		}
		fmt.Println(text)
	})
	return m
}
```

menu with full screen


```sh
func (a *App) getScreenMenu() *menu.Menu {
	m := menu.NewMenu()
	screenMenu := m.AddSubmenu("屏幕")
	screenMenu.AddText("全屏", &keys.Accelerator{}, func(data *menu.CallbackData) {
		if runtime.WindowIsFullscreen(a.ctx) {
			runtime.WindowUnfullscreen(a.ctx)
		} else {
			runtime.WindowFullscreen(a.ctx)
		}
	})

	return m
}
```