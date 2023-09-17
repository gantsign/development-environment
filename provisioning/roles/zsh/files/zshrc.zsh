# To support bash tab-completion on apps lacking native zsh tab-completion
autoload bashcompinit
bashcompinit

# Needed by some Oh My ZSH plugins
export ZSH_CACHE_DIR="$HOME/.cache/zsh"

# Create cache and completions dir and add to $fpath
mkdir -p "$ZSH_CACHE_DIR/completions"
(( ${fpath[(Ie)"$ZSH_CACHE_DIR/completions"]} )) || fpath=("$ZSH_CACHE_DIR/completions" $fpath)

if [ -x /home/linuxbrew/.linuxbrew/bin/brew ]; then
    export HOMEBREW_INSTALL_FROM_API=1

    # If the initialization file does not exist, generate it and then source it
    # Otherwise, source it
    if [[ ! -f "$ZSH_CACHE_DIR/homebrew" ]]; then
        /home/linuxbrew/.linuxbrew/bin/brew shellenv | tee "$ZSH_CACHE_DIR/homebrew" >/dev/null
    fi
    source "$ZSH_CACHE_DIR/homebrew"

    # refresh $commands
    rehash
fi

# Load environment variables
[[ -f ~/.config/zsh/env.zsh ]] && source ~/.config/zsh/env.zsh

if (( $+commands[starship] )); then
    # If the initialization file does not exist, generate it and then source it
    # Otherwise, source it and regenerate in the background
    if [[ ! -f "$ZSH_CACHE_DIR/starship" ]]; then
        starship init zsh --print-full-init | tee "$ZSH_CACHE_DIR/starship" >/dev/null
        source "$ZSH_CACHE_DIR/starship"
    else
        source "$ZSH_CACHE_DIR/starship"
        starship init zsh --print-full-init | tee "$ZSH_CACHE_DIR/starship" >/dev/null &|
    fi
fi

# zimfw init
ZIM_HOME=~/.cache/zim

# Download zimfw plugin manager if missing.
if [[ ! -e ${ZIM_HOME}/zimfw.zsh ]]; then
  curl -fsSL --create-dirs -o ${ZIM_HOME}/zimfw.zsh \
      https://github.com/zimfw/zimfw/releases/latest/download/zimfw.zsh
fi

# Install missing modules, and update ${ZIM_HOME}/init.zsh if missing or outdated.
if [[ ! ${ZIM_HOME}/init.zsh -nt ${ZDOTDIR:-${HOME}}/.zimrc ]]; then
  echo 'Installing Zsh plugins...'
  source ${ZIM_HOME}/zimfw.zsh init -q
fi

# Initialize modules.
source ${ZIM_HOME}/init.zsh
