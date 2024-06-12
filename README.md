# Stuttgart Gophers web page
This is the source code for the Stuttgart Gophers home page

## Project outline
### TODO:
- post-receive file on prod server in repos/stuttgart-gophers/hooks

#!/bin/bash
while read oldrev newrev ref
do
if [[ $ref =~ .*/main$ ]];
then
echo "Deploying main branch to production..."
else
echo "Ref $ref successfully received, but only the main branch will be deployed."
fi
done

## Resources
### gofiber
Documentation
```
https://gofiber.io
```

Installing gofiber
```
go get github.com/gofiber/fiber/v2
```

### Task
Documentation
```
https://taskfile.dev/
```

Installing Task
```
yay -S go-task-bin
```
or
```
https://taskfile.dev/installation/
```