# transformers

install
```sh
pip install transformers
```

add mirror
```sh
pip install -U huggingface_hub
```

config mirror
```sh
vi ~/.bashrc
```

add command 
```sh
export HF_ENDPOINT=https://hf-mirror.com
```

install huggingface cli
```sh
pip install -U "huggingface_hub[cli]"
```

install models 
```sh
huggingface-cli download --resume-download deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B
```
install aria2c
```sh
sudo snap install aria2c
```

install hdf
```sh
wget https://hf-mirror.com/hfd/hfd.sh
mv hdf.sh hdf
chmod +x hfd
```
download models
```sh
hfd deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B
```


