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
./build/bin/llama-server -m ./models/gemma-4-26B-A4B-it-UD-Q4_K_XL.gguf -ngl 999 -c 16384  --port 8080
```

```sh
curl http://localhost:8080/completion   -d '{
    "prompt": "<bos><start_of_turn>user\n use vite to create vue3 and write a user register include username,email,password  and login page and forget password and home page for sell goods<end_of_turn>\n<start_of_turn>model\n"
  }'

```

use vite to create vue3 and react to write a user register include username,email,password  and login page and forget password and home page for sell goods