install:
	npm ci
	npm link

uninstall:
	npm uninstall -g @hexlet/code

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npx jest