@echo off
setlocal EnableDelayedExpansion
set len= 50
FOR /l %%N in (1,1,!len!) do (
    set "n=00%%N"
    set "n=!n:~-3!"
    echo https://www.dl.dropboxusercontent.com/s/smbs02wlk8b3h5o/time_!n!.zip?dl=0 >> url_list.txt
)
