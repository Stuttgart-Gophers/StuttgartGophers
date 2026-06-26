FROM golang:alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -v -o stuttgart-gophers .
CMD ./stuttgart-gophers

FROM alpine:latest
RUN adduser -D -u 1000 appuser
WORKDIR /app
COPY --chown=appuser:appuser templates templates
COPY --from=builder --chown=appuser:appuser /app/stuttgart-gophers .
USER appuser
CMD ./stuttgart-gophers