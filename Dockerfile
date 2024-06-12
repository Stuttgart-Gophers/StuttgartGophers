FROM golang:alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -v -o stuttgart-gophers .
CMD ./stuttgart-gophers

FROM alpine:latest
WORKDIR /app
COPY templates templates
COPY --from=builder /app/stuttgart-gophers .
CMD ./stuttgart-gophers