# install

```sh
npm install -g @anthropic-ai/claude-code
```

Then start Claude Code in any project:

```sh
cd your-project
claude
```

config
```sh
vi ~/.claude.json
```

add config
```sh
"hasCompletedOnboarding": true
```

config ali coder
```sh
{
  "hasCompletedOnboarding": true,
  "hasAcceptedTerms": true,
  "isLoggedIn": true,
  "env": {
    "ANTHROPIC_BASE_URL": "http://localhost:8090/v1",
    "ANTHROPIC_API_KEY": "YOUR_OPENROUTER_API_KEY",
    "ANTHROPIC_MODEL": "gemma-4/gemma-4",
    "ANTHROPIC_SMALL_FAST_MODEL": "gemma-4/gemma-4"
  }
}

```

{
   "hasCompletedOnboarding": true,
  "hasAcceptedTerms": true,
  "isLoggedIn": true,
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "sk-sp-6105958a9aeb4a8bbf315cff3e3d22bb",
    "ANTHROPIC_BASE_URL": "https://coding.dashscope.aliyuncs.com/apps/anthropic",
    "ANTHROPIC_MODEL": "qwen3.5-plus"
  }
}