# .env: https://www.robg3d.com/2020/05/2288/
ifneq (,$(wildcard ./.env))
    include .env
    export
endif

default: ;

# Docker convenience recipes:

.PHONY: build
build:
	docker build \
		-t techtest:$$(date -u +"%Y%m%d%H%M%S") \
		-t techtest:latest \
		-- .

.PHONY: run
run:
	docker run \
		--rm \
		--env-file .env \
		-p 3000:3000 \
		techtest:latest

.PHONY: push
push:
	# This is really a job for CI ofc, just here for convenience.
	docker tag techtest:latest emivespa/techtest:latest
	docker push emivespa/techtest:latest
