#!/bin/bash

command git rev-parse --git-dir &>/dev/null || exit
for ref in refs/{heads,remotes/{origin,upstream}}/{main,trunk,mainline,default}; do
	if command git show-ref -q --verify $ref; then
		echo ${ref##*/}
		exit
	fi
done
echo master
