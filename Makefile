MAKEFLAGS      = --no-print-directory --no-builtin-rules
SHELL := /bin/bash
# If `venv/bin/python` exists, it is used. If not, use PATH to find python.
SYSTEM_PYTHON  = $(or $(shell which python3), $(shell which python))
PYTHON         = $(or $(wildcard venv/bin/python), $(SYSTEM_PYTHON))
SYSTEM_PIP     = $(or $(shell which pip3), $(shell which pip))
PIP	       = $(or $(wildcard venv/bin/pip), $(SYSTEM_PIP))

deps: venv
	$(PYTHON) -m pip install -r requirements.txt
	$(PIP) install wheel
	$(PIP) install git+https://github.com/psf/black
	$(PIP) install flake8
	$(PIP) install mdformat-gfm mdformat-frontmatter mdformat-footnote
	$(PIP) install nose2

venv:
	$(SYSTEM_PYTHON) -m venv venv

serve:
	$(PYTHON) -m mkdocs serve

black:
	$(PYTHON) -m black .

flake:
	$(PYTHON) -m flake8 .

check-md:
	$(PYTHON) -m mdformat --check .

format-md:
	$(PYTHON) -m mdformat .

test:
	$(PYTHON) -m nose2

python:
	$(PYTHON)
