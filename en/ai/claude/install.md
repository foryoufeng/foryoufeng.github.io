# install

```sh
curl -fsSL https://claude.ai/install.sh | bash
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