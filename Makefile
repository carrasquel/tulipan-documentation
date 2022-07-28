MAKEFLAGS      = --no-print-directory --no-builtin-rules
SHELL := /bin/bash
# If `venv/bin/python` exists, it is used. If not, use PATH to find python.
SYSTEM_PYTHON  = $(or $(shell which python3), $(shell which python))
PYTHON         = $(or $(wildcard venv/bin/python), $(SYSTEM_PYTHON))

venv:
	$(SYSTEM_PYTHON) -m venv venv

deps:
	$(PYTHON) -m pip install -r requirements.txt

serve:
	$(PYTHON) -m mkdocs serve
