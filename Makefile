.PHONY: clean build

# THE ORDER OF THESE MATTER -- science.js should be at the end.
DOTJS = js/animateRotate.js js/data.js js/dropmenu.js js/hiring.js js/stat.js js/upgrades.js js/science.js

# the order of these doesn't matter, as long as they're all here
DOTCSS = css/dropdown.css css/header.css css/hiring.css css/nav.css css/stat.css css/style.css css/upgrades.css

# default target
science: min.js min.css

# cat all the files together and put 'em in min.js & min.css
# TODO: minify
min.js: $(DOTJS)
	cat $(DOTJS) > min.js

min.css: $(DOTCSS)
	cat $(DOTCSS) > min.css


# I'm not sure what you'll use this for, but it's here.
clean:
	rm min.*
