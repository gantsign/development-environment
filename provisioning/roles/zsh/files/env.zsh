export PATH="$HOME/.local/bin:$PATH"

# Workaround for https://github.com/starship/starship/issues/2176
export LC_ALL='en_GB.UTF-8'

export PAGER="less"

# Disable Oh My Zsh auto-update
DISABLE_AUTO_UPDATE="true"

# History location
HISTFILE="$HOME/.zsh_history"

HISTORY_IGNORE='(cd ..|cd..|cd-|cd -|cd -2|zi|*VAULT_TOKEN*|*X-Vault-Token*|*create secret*|*password*|*Authorization*)'

# Gray color for autosuggestions
ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE='fg=247'

# fzf settings. Uses sharkdp/fd for a faster alternative to `find`.
if (( $+commands[fd] )); then
    FZF_DEFAULT_COMMAND='fd --type f --hidden --exclude .git --exclude .cache'
    FZF_CTRL_T_COMMAND='fd --type f --hidden --exclude .git --exclude .cache'
    FZF_ALT_C_COMMAND='fd --type d --hidden --exclude .git'
elif (( $+commands[fdfind] )); then
    # Ubuntu OS package uses fdfind
    FZF_DEFAULT_COMMAND='fdfind --type f --hidden --exclude .git --exclude .cache'
    FZF_CTRL_T_COMMAND='fdfind --type f --hidden --exclude .git --exclude .cache'
    FZF_ALT_C_COMMAND='fdfind --type d --hidden --exclude .git'
fi

# bat's default this is a little too garish
export BAT_THEME='Visual Studio Dark+'

# man pages with colour
if (( $+commands[bat] )); then
    # bat's man syntax highlighting only works well with the default theme
    export MANPAGER="sh -c 'col -bx | bat -l man -p --pager less --theme default'"
elif (( $+commands[batcat] )); then
    # Ubuntu OS package uses batcat
    # bat's man syntax highlighting only works well with the default theme
    export MANPAGER="sh -c 'col -bx | batcat -l man -p --pager less --theme default'"
fi

# Don't suggest these aliases
export YSU_IGNORED_ALIASES=('cd..' 'cd-')
