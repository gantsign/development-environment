#!/bin/bash

command git rev-parse --git-dir &>/dev/null || exit
for branch in dev devel development; do
	if command git show-ref -q --verify refs/heads/$branch; then
		echo $branch
		exit
	fi
done
echo develop
