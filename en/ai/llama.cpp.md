# llama.cpp

install
```sh
git clone https://github.com/ggerganov/llama.cpp.git
cd llama.cpp-master
cmake -B build   -DGGML_CUDA=ON   -DCMAKE_CUDA_COMPILER=/usr/local/cuda/bin/nvcc -DLLAMA_CURL=OFF
cmake --build build -j$(nproc)
./build/bin/llama-cli --help | grep -i cuda
```

run model

```sh
llama-cli -m ./models/qwen2.5-0.5b-instruct-q5_k_m.gguf  -ngl 999  -b 1024  -p "Write a haiku about Linux"
```

run server
```sh
llama-cli -m /home/ubuntu/wuqiang/soft/models/gemma-3-27b-it-Q6_K.gguf  -ngl 999  -b 1024  -p "hello"
llama-server  -m /home/ubuntu/wuqiang/soft/models/gemma-3-27b-it-Q6_K.gguf --threads 8 --ctx-size 2048 --host 0.0.0.0 --port 8090
```

request it
```sh
curl -X POST http://localhost:8090/v1/completions -H "Content-Type: application/json" -d '{ "model": "gemma-3-27b-it-Q6_K","prompt": "hello"}'
```

curl -X POST http://192.168.2.52:8090/v1/completions -H "Content-Type: application/json" -d '{ "model": "gemma-3-27b-it-Q6_K","prompt": "hello"}'
