.PHONY: clean build

DOTJS = js/animateRotate.js js/data.js js/dropmenu.js js/hiring.js js/stat.js js/upgrades.js js/science.js
DOTCSS = css/dropdown.css css/header.css css/hiring.css css/nav.css css/stat.css css/style.css css/upgrades.css

build: min.js min.css

min.js: $(DOTJS)
	cat $(DOTJS) > min.js

min.css: $(DOTCSS)
	cat $(DOTCSS) > min.css


# I'm not sure what you'll use this for, but it's here.
clean:
	rm min.js min.css
