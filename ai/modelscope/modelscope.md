# modelscope

```sh
modelscope download \
  --model Qwen/Qwen2.5-0.5B-Instruct-GGUF \
  --include "qwen2.5-0.5b-instruct-q4_k_m.gguf" \
  --local_dir ./models/
```

use llama.cpp run it

```sh
./build/bin/llama-cli -m ./models/qwen2.5-0.5b-instruct-q4_k_m.gguf  -ngl 999  -b 1024  -p "Write a haiku about Linux"
```

download gemma-4

```sh
modelscope download \
  --model unsloth/gemma-4-E2B-it-GGUF \
  --include "gemma-4-E2B-it-Q4_K_S.gguf" \
  --local_dir ./models/
```

run it

```sh
./build/bin/llama-cli -m ./models/gemma-4-E2B-it-Q4_K_S.gguf  -ngl 999  -b 1024  -p "Write a haiku about Linux"
```

download gemma-4-e4b

```sh
modelscope download \
  --model unsloth/gemma-4-E4B-it-GGUF \
  --include "gemma-4-E4B-it-UD-Q4_K_XL.gguf" \
  --local_dir ./models/
```

run it

```sh
./build/bin/llama-cli -m ./models/gemma-4-E4B-it-UD-Q4_K_XL.gguf  -ngl 999  -b 1024  -p "Write a haiku about Linux"
```

download gemma-4-26b

```sh
modelscope download \
  --model unsloth/gemma-4-26B-A4B-it-GGUF \
  --include "gemma-4-26B-A4B-it-UD-Q4_K_XL.gguf" \
  --local_dir ./models/
```
run it

```sh
./build/bin/llama-cli -m ./models/gemma-4-26B-A4B-it-UD-Q4_K_XL.gguf  -ngl 999  -b 2048 -c 32768 -n -1 --threads 16 --flash-attn on --no-mmap -p "You use system is Linux"
```

run server

```sh
./build/bin/llama-server -m ./models/gemma-4-26B-A4B-it-UD-Q4_K_XL.gguf -ngl 999 -c 16384  --host 0.0.0.0 --port 8090 
```

```sh
curl http://localhost:8090/completion   -d '{
    "prompt": "<bos><start_of_turn>user\n use vite to create vue3 and write a user register include username,email,password  and login page and forget password and home page for sell goods<end_of_turn>\n<start_of_turn>model\n"
  }'

```


use vite to create vue3 and react to write a user register include username,email,password  and login page and forget password and home page for sell goods

download 31b

```sh
modelscope download \
  --model unsloth/gemma-4-31B-it-GGUF \
  --include "gemma-4-31B-it-Q5_K_S.gguf" \
  --local_dir ./models/
```

run it

```sh
    ./build/bin/llama-cli -m ./models/gemma-4-31B-it-Q5_K_S.gguf  -ngl 999  -b 1024 -c 2048 -p "You use system is debian"
```

run q4

```sh
./build/bin/llama-cli -m ./models/gemma-4-31B-it-Q4_K_M.gguf  -ngl 999  -b 1024 -c 2048 -p "You use system is debian"
```

download Qwen3.5-27B

```sh
modelscope download \
  --model unsloth/Qwen3.5-27B-gguf \
  --include "Qwen3.5-27B-Q4_K_M.gguf" \
  --local_dir ./models/
```

run

```sh
./build/bin/llama-cli -m ./models/Qwen3.5-27B-Q4_K_M.gguf  -ngl 999  -b 1024 -c 2048 -p "You use system is debian"
```