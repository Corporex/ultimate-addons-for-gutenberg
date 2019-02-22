/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function styling( props ) {

	const {
		tag,
		align,
		titleColor,
		prefixColor,
		descColor,
		titleFontFamily,
		titleFontWeight,
		titleFontSizeType,
		titleFontSize,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightMobile,
		titleLineHeightTablet,
		prefixFontFamily,
		prefixFontWeight,
		prefixFontSizeType,
		prefixFontSize,
		prefixFontSizeMobile,
		prefixFontSizeTablet,
		prefixLineHeightType,
		prefixLineHeight,
		prefixLineHeightMobile,
		prefixLineHeightTablet,
		descFontFamily,
		descFontWeight,
		descFontSizeType,
		descFontSize,
		descFontSizeMobile,
		descFontSizeTablet,
		descLineHeightType,
		descLineHeight,
		descLineHeightMobile,
		descLineHeightTablet,
		socialFontSize,
		socialFontSizeType,
		socialFontSizeMobile,
		socialFontSizeTablet,
		imgStyle,
		imgAlign,
		imgSize,
		imgWidth,
		imgPosition,
		titleSpace,
		descSpace,
		prefixSpace,
		imgLeftMargin,
		imgRightMargin,
		imgTopMargin,
		imgBottomMargin,
		socialColor,
		socialHoverColor,
		socialSpace,
	} = props.attributes

	var tablet_selectors = {}
	var mobile_selectors = {}

	var selectors = {
		" .editor-rich-text p.uagb-team__desc.editor-rich-text__tinymce": {
			"font-size": descFontSize + descFontSizeType,
			"line-height": descLineHeight + descLineHeightType,
			"font-family": descFontFamily,
			"font-weight": descFontWeight,
			"color": descColor,
			"margin-bottom": descSpace + "px",
		},
		" .uagb-team__prefix": {
			"font-family": prefixFontFamily,
			"font-weight": prefixFontWeight,
			"font-size": prefixFontSize + prefixFontSizeType,
			"line-height": prefixLineHeight + prefixLineHeightType,
			"color": prefixColor,
		},
		" .uagb-team__desc-wrap": {
			"margin-top": prefixSpace + "px",
		},
		" .uagb-team__social-icon a": {
			"color": socialColor,
			"font-size": socialFontSize + socialFontSizeType,
			"width": socialFontSize + socialFontSizeType,
			"height": socialFontSize + socialFontSizeType,
			"line-height": socialFontSize + socialFontSizeType,
		},
		" .uagb-team__social-icon svg": {
			"fill": socialColor,
			"width": socialFontSize + socialFontSizeType,
			"height": socialFontSize + socialFontSizeType,
		},
		" .uagb-team__social-icon:hover a": {
			"color": socialHoverColor,
		},
		" .uagb-team__social-icon:hover svg": {
			"fill": socialHoverColor
		},
		".uagb-team__image-position-left .uagb-team__social-icon" : {
			"margin-right": socialSpace + "px",
			"margin-left": "0",
		},
		".uagb-team__image-position-right .uagb-team__social-icon" : {
			"margin-left": socialSpace + "px",
			"margin-right": "0",
		},
		".uagb-team__image-position-above.uagb-team__align-center .uagb-team__social-icon" : {
			"margin-right": ( socialSpace / 2 ) + "px",
			"margin-left": ( socialSpace / 2 ) + "px",
		},
		".uagb-team__image-position-above.uagb-team__align-left .uagb-team__social-icon" : {
			"margin-right": socialSpace + "px",
			"margin-left": "0",
		},
		".uagb-team__image-position-above.uagb-team__align-right .uagb-team__social-icon" : {
			"margin-left": socialSpace + "px",
			"margin-right": "0",
		},
		" .uagb-team__image-wrap" : {
			"margin-top": imgTopMargin + "px",
			"margin-bottom": imgBottomMargin + "px",
			"margin-left": imgLeftMargin + "px",
			"margin-right": imgRightMargin + "px",
			"width": imgWidth + "px"
		}
	}

	if ( "above" == imgPosition ) {
		if ( "center" == align ) {
			selectors[" .uagb-team__image-wrap"]["margin-left"] = "auto"
			selectors[" .uagb-team__image-wrap"]["margin-right"] = "auto"
		} else if ( "left" == align ) {
			selectors[" .uagb-team__image-wrap"]["margin-right"] = "auto"
		} else if ( "right" == align ) {
			selectors[" .uagb-team__image-wrap"]["margin-left"] = "auto"
		}
	}

	if ( "above" != imgPosition ) {
		if ( "middle" == imgAlign ) {
			selectors[" .uagb-team__image-wrap"]["align-self"] = "center"
		}
	}

	selectors[" .editor-rich-text " + tag + ".uagb-team__title"] = {
		"font-family": titleFontFamily,
		"font-weight": titleFontWeight,
		"font-size": titleFontSize + titleFontSizeType,
		"line-height": titleLineHeight + titleLineHeightType,
		"color": titleColor,
		"margin-bottom": titleSpace + "px",
	}

	mobile_selectors = {
		" .editor-rich-text p.uagb-team__desc.editor-rich-text__tinymce": {
			"font-size": descFontSizeMobile + descFontSizeType,
		},
		" .uagb-team__prefix": {
			"font-size": prefixFontSizeMobile + prefixFontSizeType,
		},
		" .uagb-team__social-icon a": {
			"font-size": socialFontSizeMobile + socialFontSizeType,
			"width": socialFontSizeMobile + socialFontSizeType,
			"height": socialFontSizeMobile + socialFontSizeType,
			"line-height": socialFontSizeMobile + socialFontSizeType,
		},
		" .uagb-team__social-icon svg": {
			"width": socialFontSizeMobile + socialFontSizeType,
			"height": socialFontSizeMobile + socialFontSizeType,
		},
	}

	tablet_selectors = {
		" .editor-rich-text p.uagb-team__desc.editor-rich-text__tinymce": {
			"font-size": descFontSizeTablet + descFontSizeType,
		},
		" .uagb-team__prefix": {
			"font-size": prefixFontSizeTablet + prefixFontSizeType,
		},
		" .uagb-team__social-icon a": {
			"font-size": socialFontSizeTablet + socialFontSizeType,
			"width": socialFontSizeTablet + socialFontSizeType,
			"height": socialFontSizeTablet + socialFontSizeType,
			"line-height": socialFontSizeTablet + socialFontSizeType,
		},
		" .uagb-team__social-icon svg": {
			"width": socialFontSizeTablet + socialFontSizeType,
			"height": socialFontSizeTablet + socialFontSizeType,
		},
	}

	mobile_selectors[" .editor-rich-text " + tag + ".uagb-team__title"] = {
		"font-size": titleFontSizeMobile + titleFontSizeType,
	}

	tablet_selectors[" .editor-rich-text " + tag + ".uagb-team__title"] = {
		"font-size": titleFontSizeTablet + titleFontSizeType,
	}

	var styling_css = ""
	var id = `#uagb-team-${ props.clientId }`

	styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
