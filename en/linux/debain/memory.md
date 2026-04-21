# memory

see top 20

```sh
ps -eo pid,comm,%mem,rss --sort=-rss | awk 'NR==1{printf "%-8s %-20s %-8s %10s\n",$1,$2,$3,"RSS(MB)"} NR>1{printf "%-8s %-20s %-8s %10.2f\n",$1,$2,$3,$4/1024}' | head -n 21
```