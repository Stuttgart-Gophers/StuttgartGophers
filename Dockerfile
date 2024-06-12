FROM golang
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -v -o stuttgart-gophers .
CMD ./stuttgart-gophers