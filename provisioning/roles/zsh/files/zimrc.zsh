zmodule ohmyzsh/ohmyzsh --root lib \
  -s 'clipboard.zsh' \
  -s 'compfix.zsh' \
  -s 'completion.zsh' \
  -s 'correction.zsh' \
  -s 'directories.zsh' \
  -s 'functions.zsh' \
  -s 'grep.zsh' \
  -s 'key-bindings.zsh' \
  -s 'misc.zsh' \
  -s 'spectrum.zsh' \
  -s 'termsupport.zsh'

zmodule ohmyzsh/ohmyzsh --root plugins \
  -f 'autopep8' \
  -f 'fd' \
  -f 'git-escape-magic' \
  -f 'gradle' \
  -f 'httpie' \
  -f 'ng' \
  -f 'pep8' \
  -f 'pip' \
  -f 'ripgrep'

if (( $+commands[docker] )); then
    zmodule ohmyzsh/ohmyzsh --root plugins -f 'docker'
fi
if (( $+commands[ctop] )); then
    zmodule gantsign/zsh-plugins -f 'ctop'
fi
zmodule gantsign/zsh-plugins -f 'dive'
if (( $+commands[docker-compose] )); then
    zmodule ohmyzsh/ohmyzsh --root plugins -f 'docker-compose'
fi
if (( $+commands[yarn] )); then
    zmodule ohmyzsh/ohmyzsh --root plugins -f 'yarn'
fi

zmodule "$HOME/.config/zsh" -s 'completion.zsh'

zmodule ohmyzsh/ohmyzsh --root plugins \
  -s 'command-not-found/command-not-found.plugin.zsh' \
  -s 'copybuffer/copybuffer.plugin.zsh' \
  -s 'copyfile/copyfile.plugin.zsh' \
  -s 'copypath/copypath.plugin.zsh' \
  -s 'dirhistory/dirhistory.plugin.zsh' \
  -s 'git-escape-magic/git-escape-magic.plugin.zsh' \
  -s 'git/git.plugin.zsh' \
  -s 'gradle/gradle.plugin.zsh' \
  -s 'grc/grc.plugin.zsh' \
  -s 'mvn/mvn.plugin.zsh' \
  -s 'sudo/sudo.plugin.zsh'

zmodule gantsign/zsh-plugins -s 'dive/dive.plugin.zsh'

if (( $+commands[docker] )); then
    zmodule ohmyzsh/ohmyzsh --root plugins -s 'docker/docker.plugin.zsh'
fi
if (( $+commands[docker-compose] )); then
    zmodule ohmyzsh/ohmyzsh --root plugins -s 'docker-compose/docker-compose.plugin.zsh'
fi
if (( $+commands[fzf] )); then
    zmodule ohmyzsh/ohmyzsh --root plugins -s 'fzf/fzf.plugin.zsh'
fi
if (( $+commands[kubectl] )); then
    zmodule ohmyzsh/ohmyzsh --root plugins -s 'kubectl/kubectl.plugin.zsh'
fi
if (( $+commands[kubeadm] )); then
    zmodule gantsign/zsh-plugins -s 'kubeadm/kubeadm.plugin.zsh'
fi
if (( $+commands[minikube] )); then
    zmodule gantsign/zsh-plugins -s 'minikube-none/minikube.plugin.zsh'
fi
if (( $+commands[helm] )); then
    zmodule ohmyzsh/ohmyzsh --root plugins -s 'helm/helm.plugin.zsh'
fi
if (( $+commands[kompose] )); then
    zmodule gantsign/zsh-plugins -s 'kompose/kompose.plugin.zsh'
fi
if (( $+commands[npm] )); then
    zmodule ohmyzsh/ohmyzsh --root plugins -s 'npm/npm.plugin.zsh'
fi
if (( $+commands[yarn] )); then
    zmodule ohmyzsh/ohmyzsh --root plugins -s 'yarn/yarn.plugin.zsh'
fi
if (( $+commands[pipenv] )); then
    zmodule ohmyzsh/ohmyzsh --root plugins -s 'pipenv/pipenv.plugin.zsh'
fi
if (( $+commands[pyenv] )); then
    zmodule ohmyzsh/ohmyzsh --root plugins -s 'pyenv/pyenv.plugin.zsh'
fi
if (( $+commands[zoxide] )); then
    zmodule ohmyzsh/ohmyzsh --root plugins -s 'zoxide/zoxide.plugin.zsh'
fi
zmodule gantsign/molecule-wrapper -s 'zsh/moleculew.plugin.zsh'

if [ -f  ~/.sdkman/bin/sdkman-init.sh ]; then
    zmodule ~/.sdkman/bin -s 'sdkman-init.sh'
fi
zmodule MichaelAquilina/zsh-you-should-use -s 'you-should-use.plugin.zsh'
if (( $+commands[fzf] )); then
    zmodule Aloxaf/fzf-tab
fi

if [ ! $commands[starship] ]; then
    # Use asciiship prompt if starship not found
    zmodule duration-info
    zmodule git-info
    zmodule prompt-pwd
    zmodule asciiship
fi

zmodule ~/.config/zsh -s 'custom.zsh'

# Must be last
zmodule zsh-users/zsh-autosuggestions
zmodule zsh-users/zsh-syntax-highlighting
