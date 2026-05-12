# llama.cpp

install
```sh
git clone https://github.com/ggerganov/llama.cpp.git
cd llama.cpp
cmake -B build   -DGGML_CUDA=ON   -DCMAKE_CUDA_COMPILER=/usr/local/cuda/bin/nvcc -DLLAMA_CURL=OFF
cmake --build build -j$(nproc)
./build/bin/llama-cli --help | grep -i cuda
```

if in china
```sh
git clone https://gitcode.com/GitHub_Trending/ll/llama.cpp.git
```

install new cuda

```sh
wget https://developer.download.nvidia.com/compute/cuda/12.4.1/local_installers/cuda_12.4.1_550.54.15_linux.run
chmod +x cuda_12.4.1_550.54.15_linux.run
sudo ./cuda_12.4.1_550.54.15_linux.run

cmake -B build \
  -DGGML_CUDA=ON \
  -DCUDAToolkit_ROOT=/usr/local/cuda-12.4 \
  -DGGML_CUDA_ARCH=86 \
  -DLLAMA_CURL=OFF
```

run model

```sh
llama-cli -m ./models/qwen2.5-0.5b-instruct-q5_k_m.gguf  -ngl 999  -b 1024  -p "Write a haiku about Linux"
```

run server
```sh
llama-cli -m /home/ubuntu/wuqiang/soft/models/gemma-4-E2B-it-Q4_K_S.gguf  -ngl 999  -b 1024  -p "hello"
llama-server  -m /home/ubuntu/wuqiang/soft/models/gemma-4-E2B-it-Q4_K_S.gguf --threads 8 --ctx-size 2048 --host 0.0.0.0 --port 8090
llama-server  -m /home/ubuntu/wuqiang/soft/models/gemma-4-26B-A4B-it-UD-Q4_K_XL.gguf --threads 8 --ctx-size 2048 --host 0.0.0.0 --port 8090
```

request it
```sh
curl -X POST http://localhost:8090/v1/completions -H "Content-Type: application/json" -d '{ "model": "gemma-3-27b-it-Q6_K","prompt": "hello"}'
```

curl -X POST http://192.168.2.52:8090/v1/completions -H "Content-Type: application/json" -d '{ "model": "gemma-3-27b-it-Q6_K","prompt": "hello"}'
