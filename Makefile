MAKEFLAGS      = --no-print-directory --no-builtin-rules
SHELL := /bin/bash
# If `venv/bin/python` exists, it is used. If not, use PATH to find python.
SYSTEM_PYTHON  = $(or $(shell which python3), $(shell which python))
PYTHON         = $(or $(wildcard venv/bin/python), $(SYSTEM_PYTHON))
SYSTEM_PYTHON  = $(or $(shell which pip3), $(shell which pip))
PIP	       = $(or $(wildcard venv/bin/pip), $(SYSTEM_PIP))

venv:
	$(SYSTEM_PYTHON) -m venv venv

deps:
	$(PYTHON) -m pip install -r requirements.txt
	$(PIP) install wheel
	$(PIP) install git+https://github.com/psf/black
	$(PIP) install mdformat-gfm mdformat-frontmatter mdformat-footnote

serve:
	$(PYTHON) -m mkdocs serve

black:
	$(PYTHON) -m black .

check-md:
	$(PYTHON) -m mdformat --check .

format-md:
	$(PYTHON) -m mdformat .

