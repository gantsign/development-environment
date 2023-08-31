# Enable support for multibyte characters
setopt COMBINING_CHARS

if (( $+commands[bat] )); then
  alias cat='bat --style=plain --pager=never'
  alias less='bat --paging=always'
elif (( $+commands[batcat] )); then
  # Ubuntu OS package uses batcat
  alias cat='batcat --style=plain --pager=never'
  alias less='batcat --paging=always'
  alias bat='batcat'
fi

if (( $+commands[lsd] )); then
  alias ls='lsd'
  alias tree='lsd --tree'
fi

if (( $+commands[xdg-open] )); then
  alias open='xdg-open'
else
  alias open='code --reuse-window'
  alias xdg-open='code --reuse-window'
fi

alias la='ls -lAFh'

alias grep='grep --color'
alias sgrep='grep -R -n -H -C 5 --exclude-dir={.git,.svn,CVS}'

# Ubuntu OS package uses fdfind
if (( $+commands[fdfind] )); then
  alias fd='fdfind'
fi

alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'

alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'
alias cd..='cd ..'
alias cd-='cd -'

# List archive contents as default action
alias -s zip='unzip -l'
alias -s rar='unrar l'
alias -s tar='tar tf'
alias -s tar.gz='tar tzf'
alias -s tar.bz2='tar tjf'
alias -s tar.xz='tar tJf'
alias -s tar.zsd='tar -I zstd -tf'
alias -s ace='unace l'
alias -s 7z='7z l'

# Git branch helpers
if [ ! -f ~/.local/bin/git-main-branch ]; then
    mkdir -p "$HOME/.local/bin"
    echo "\
#!/usr/bin/bash

$(which git_main_branch)

git_main_branch" > ~/.local/bin/git-main-branch
    chmod 'u=rwx,go=r' ~/.local/bin/git-main-branch
fi
if [ ! -f ~/.local/bin/git-develop-branch ]; then
    echo "\
#!/usr/bin/bash

$(which git_develop_branch)

git_develop_branch" > ~/.local/bin/git-develop-branch
    chmod 'u=rwx,go=r' ~/.local/bin/git-develop-branch
fi

# Git clone and cd
git-clone-cd() {
    local arg
    local dir=''
    for arg in "$@"; do
        if [[ "$arg" == *'.git' ]]; then
            dir="$(basename "$arg" '.git')"
        elif [[ ! -z "$dir" ]]; then
            dir="$arg"
        fi
    done
    git clone "$@" || return $?
    if [[ ! -z "$dir" ]] && [[ -d "$dir" ]]; then
        cd "$dir"
    fi
}
compdef _git git-clone-cd=git-clone
alias c=git-clone-cd

# Default dirhistory bindings Alt-{Up,Down,Left,Right} conflict in Terminator and VS Code
# Add Shift-Alt-{Up,Down,Left,Right} bindings to use instead
bindkey "\e[1;4D" dirhistory_zle_dirhistory_back
bindkey "\e[1;4C" dirhistory_zle_dirhistory_future
bindkey "\e[1;4A" dirhistory_zle_dirhistory_up
bindkey "\e[1;4B" dirhistory_zle_dirhistory_down

# Disable zimfw update prompts
zstyle ':zim' disable-version-check yes

# fzf-tab config
# disable sort when completing `git checkout`
zstyle ':completion:*:git-checkout:*' sort false
# set descriptions format to enable group support
zstyle ':completion:*:descriptions' format '[%d]'
# set list-colors to enable filename colorizing
zstyle ':completion:*' list-colors ${(s.:.)LS_COLORS}
# switch group using `,` and `.`
zstyle ':fzf-tab:*' switch-group ',' '.'
# remove bullet from results
zstyle ':fzf-tab:*' prefix ''
# always show group
zstyle ':fzf-tab:*' single-group color header
# preview apt package info
zstyle ':fzf-tab:complete:apt:*' fzf-preview '[[ $group == "[package]" ]] && apt-cache show $word'
