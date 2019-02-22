/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function contentTimelineStyle( props ) {
	const {
		dateBottomspace,
		backgroundColor,
		separatorColor,
		separatorFillColor,
		separatorBg,
		separatorBorder,
		borderFocus,
		verticalSpace,
		horizontalSpace,
		separatorwidth,
		borderwidth,
		connectorBgsize,
		borderRadius,
		bgPadding,
		width,
		readMoreText,
		icon,
		iconColor,
		dateFontsizeType,
		dateFontsize,
		dateFontsizeTablet,
		dateFontsizeMobile,
		dateFontFamily,
		dateFontWeight,
		dateFontSubset,
		dateLineHeightType,
		dateLineHeight,
		dateLineHeightTablet,
		dateLineHeightMobile,
		dateLoadGoogleFonts,
		dateColor,
		iconSize,
		iconFocus,
		iconBgFocus,
		block_id,
		headFontSizeType,
		headFontSize,
		headFontSizeTablet,
		headFontSizeMobile,
		headFontFamily,
		headFontWeight,
		headFontSubset,
		headLineHeightType,
		headLineHeight,
		headLineHeightTablet,
		headLineHeightMobile,
		headLoadGoogleFonts,
		align,
		headingColor,
		headSpace,
		subHeadFontSizeType,
		subHeadFontSize,
		subHeadFontSizeTablet,
		subHeadFontSizeMobile,
		subHeadFontFamily,
		subHeadFontWeight,
		subHeadFontSubset,
		subHeadLineHeightType,
		subHeadLineHeight,
		subHeadLineHeightTablet,
		subHeadLineHeightMobile,
		subHeadLoadGoogleFonts,
		subHeadingColor,
		authorSpace,
		authorColor,
		authorFontSizeType,
		authorFontSize,
		authorFontSizeTablet,
		authorFontSizeMobile,
		authorFontFamily,
		authorFontWeight,
		authorFontSubset,
		authorLineHeightType,
		authorLineHeight,
		authorLineHeightTablet,
		authorLineHeightMobile,
		authorLoadGoogleFonts,
		ctaColor,
		ctaFontSizeType,
		ctaFontSize,
		ctaFontSizeTablet,
		ctaFontSizeMobile,
		ctaFontFamily,
		ctaFontWeight,
		ctaFontSubset,
		ctaLineHeightType,
		ctaLineHeight,
		ctaLineHeightTablet,
		ctaLineHeightMobile,
		ctaLoadGoogleFonts,
		ctaBackground,
	} = props.attributes

	if( props.clientId ){
		var clientId = props.clientId
	}else{
		var clientId = block_id
	}


	var resp_selectors = "left"

	var selectors = {
		" .uagb-timeline__heading" : {
			"font-size" : headFontSize+headFontSizeType,
			"font-family": headFontFamily,
			"font-weight": headFontWeight,
			"line-height": headLineHeight + headLineHeightType,
			"text-align": align,
			"color": headingColor,
		},
		" .uagb-timeline__heading a" : {
			"font-size" : headFontSize+headFontSizeType,
			"font-family": headFontFamily,
			"font-weight": headFontWeight,
			"line-height": headLineHeight + headLineHeightType,
			"text-align": align,
			"color": headingColor,
		},
		" .uagb-timeline__heading-text" : {
			"margin-bottom" : headSpace+"px",
		},
		" .uagb-timeline-desc-content" : {
			"font-size" : subHeadFontSize+subHeadFontSizeType,
			"font-family": subHeadFontFamily,
			"font-weight": subHeadFontWeight,
			"line-height": subHeadLineHeight + subHeadLineHeightType,
			"text-align": align,
			"color": subHeadingColor,
		},
		" .uagb-timeline__events-new" : {
			"text-align": align,
		},
		" .uagb-timeline__date-inner" : {
			"text-align": align,
		},
		" .uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after" : {
			"border-left-color" : backgroundColor,
		},
		" .uagb-timeline__right-block .uagb-timeline__day-right .uagb-timeline__arrow:after" : {
			"border-left-color" : backgroundColor
		},
		" .uagb-timeline__center-block .uagb-timeline__day-left .uagb-timeline__arrow:after" : {
			"border-right-color" : backgroundColor
		},
		" .uagb-timeline__left-block .uagb-timeline__day-left .uagb-timeline__arrow:after" : {
			"border-right-color" : backgroundColor
		},
		" .uagb-timeline__line__inner" : {
			"background-color" : separatorFillColor
		},
		" .uagb-timeline__line" : {
			"background-color" : separatorColor,
			"width" : separatorwidth+"px",
		},
		" .uagb-timeline__right-block .uagb-timeline__line" : {
			"right" : "calc( "+connectorBgsize+"px / 2 )",
		},
		" .uagb-timeline__left-block .uagb-timeline__line" : {
			"left" : "calc( "+connectorBgsize+"px / 2 )",
		},
		" .uagb-timeline__center-block .uagb-timeline__line" : {
			"right" : "calc( "+connectorBgsize+"px / 2 )",
		},
		" .uagb-timeline__marker" : {
			"background-color" : separatorBg,
			"min-height": connectorBgsize+"px",
			"min-width" : connectorBgsize+"px",
			"line-height" : connectorBgsize+"px",
			"border": borderwidth+"px solid"+separatorBorder,
		},
		" .uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow" : {
			"height" : connectorBgsize+"px",
		},
		" .uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow" : {
			"height" : connectorBgsize+"px",
		},
		" .uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow" : {
			"height" : connectorBgsize+"px",
		},
		" .uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow" : {
			"height" : connectorBgsize+"px",
		},
		" .uagb-timeline__center-block .uagb-timeline__marker" : {
			"margin-left" : horizontalSpace+"px",
			"margin-right": horizontalSpace+"px",
		},
		" .uagb-timeline__field:not(:last-child)" : {
			"margin-bottom" : verticalSpace+"px",
		},
		" .uagb-timeline__date-hide.uagb-timeline__date-inner" : {
			"margin-bottom" : dateBottomspace+"px",
			"color": dateColor,
			"font-size" : dateFontsize+dateFontsizeType,
			"font-family": dateFontFamily,
			"font-weight": dateFontWeight,
			"line-height": dateLineHeight + dateLineHeightType,
			"text-align": align,
		},
		" .uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left" : {
			"margin-left" : horizontalSpace+"px",
		},
		" .uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right" : {
			"margin-right" : horizontalSpace+"px",
		},
		" .uagb-timeline__date-new" : {
			"color": dateColor,
			"font-size" : dateFontsize+dateFontsizeType,
			"font-family": dateFontFamily,
			"font-weight": dateFontWeight,
			"line-height": dateLineHeight + dateLineHeightType,
		},
		" .uagb-timeline__events-inner-new" : {
			"background-color" : backgroundColor,
			"border-radius" : borderRadius+"px",
			"padding": bgPadding+"px",
		},
		" .uagb-timeline__main .uagb-timeline__icon-new" : {
			"color": iconColor,
			"font-size" : iconSize+"px",
			"width": iconSize+"px",
		},
		" .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon" : {
			"background" : iconBgFocus,
			"border-color": borderFocus,
		},
		" .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon .uagb-timeline__icon-new" : {
			"color": iconFocus,
		},
		" .uagb-timeline__main .uagb-timeline__icon-new svg" : {
			"fill": iconColor,
		},
		" .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon .uagb-timeline__icon-new svg" : {
			"fill": iconFocus,
		},

		//Author and CTA
		" .uagb-timeline__author" : {
			"margin-bottom" : authorSpace+"px",
			"text-align": align,
		},
		" .uagb-timeline__author .dashicons-admin-users" : {
			"font-size" : authorFontSize+authorFontSizeType,			
			"font-weight": authorFontWeight,
			"line-height": authorLineHeight + authorLineHeightType,
			"color": authorColor,
		},
		" .uagb-timeline__author-link" :{
			"font-size" : authorFontSize+authorFontSizeType,
			"font-family": authorFontFamily,
			"font-weight": authorFontWeight,
			"line-height": authorLineHeight + authorLineHeightType,
			"color": authorColor,
		},

		" .uagb-timeline__link_parent" :{
			"text-align": align,
		},
		" .uagb-timeline__link" :{
			"font-size" : ctaFontSize+ctaFontSizeType,
			"font-family": ctaFontFamily,
			"font-weight": ctaFontWeight,
			"line-height": ctaLineHeight + ctaLineHeightType,
			"color": ctaColor,
			"background-color": ctaBackground,
		}
	}

	/* Generate Responsive CSS for timeline */
	var tablet_selectors = {
		" .uagb-timeline__date-hide.uagb-timeline__date-inner" : {
			"font-size" : dateFontsizeTablet + dateFontsizeType,
			"line-height": dateLineHeightTablet + dateLineHeightType,
		},
		" .uagb-timeline__date-new" : {
			"font-size" : dateFontsizeTablet + dateFontsizeType,
			"line-height": dateLineHeightTablet + dateLineHeightType,
		},
		" .uagb-timeline__heading" : {
			"font-size" : headFontSizeTablet + headFontSizeType,
			"line-height": headLineHeightTablet + headLineHeightType,
		},
		" .uagb-timeline__heading a" : {
			"font-size" : headFontSizeTablet + headFontSizeType,
			"line-height": headLineHeightTablet + headLineHeightType,
		},
		" .uagb-timeline-desc-content" : {
			"font-size" : subHeadFontSizeTablet + subHeadFontSizeType,
			"line-height": subHeadLineHeightTablet + subHeadLineHeightType,
		},
		" .uagb-timeline__center-block .uagb-timeline__marker" : {
		    "margin-left" : 0,
		    "margin-right" : 0,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__heading" : {
			"text-align"  : resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline-desc-content" : {
			"text-align"  : resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__events-new" : {
			"text-align" : resp_selectors
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__date-inner" : {
		    "text-align" : resp_selectors
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__date-hide.uagb-timeline__date-inner" : {
			"text-align": resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__day-right .uagb-timeline__arrow:after" : {
			"border-right-color"  : backgroundColor,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__line" : {
			"left" : "calc( "+connectorBgsize+"px / 2 )",
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__author" :{
			"text-align": resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link_parent" :{
			"text-align": resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__image a" :{
			"text-align": resp_selectors,
		},

		// CTA AUTHOR.
		" .uagb-timeline__author .dashicons-admin-users" : {
			"font-size" : authorFontSizeTablet+authorFontSizeType,
			"line-height": authorLineHeightTablet + authorLineHeightType,
		},
		" .uagb-timeline__author-link" :{
			"font-size" : authorFontSizeTablet+authorFontSizeType,
			"line-height": authorLineHeightTablet + authorLineHeightType,
		},
		" .uagb-timeline__link" :{
			"font-size" : ctaFontSizeTablet+ctaFontSizeType,
			"line-height": ctaLineHeightTablet + ctaLineHeightType,
		}
	}

	var mobile_selectors = {
		" .uagb-timeline__date-hide.uagb-timeline__date-inner" : {
			"font-size" : dateFontsizeMobile + dateFontsizeType,
			"line-height": dateLineHeightMobile + dateLineHeightType,
		},
		" .uagb-timeline__date-new" : {
			"font-size" : dateFontsizeMobile + dateFontsizeType,
			"line-height": dateLineHeightMobile + dateLineHeightType,
		},
		" .uagb-timeline__heading" : {
			"font-size" : headFontSizeMobile + headFontSizeType,
			"line-height": headLineHeightMobile + headLineHeightType,
		},
		" .uagb-timeline__heading a" : {
			"font-size" : headFontSizeMobile + headFontSizeType,
			"line-height": headLineHeightMobile + headLineHeightType,
		},
		" .uagb-timeline-desc-content" : {
			"font-size" : subHeadFontSizeMobile + subHeadFontSizeType,
			"line-height": subHeadLineHeightMobile + subHeadLineHeightType,
		},
		" .uagb-timeline__center-block .uagb-timeline__marker" : {
		    "margin-left" : 0,
		    "margin-right" : 0,
		},
		" .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left" : {
			"margin-left" : horizontalSpace+"px",
		},
		" .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right" : {
		    "margin-left" : horizontalSpace+"px",
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__heading" : {
			"text-align"  : resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline-desc-content" : {
			"text-align"  : resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__events-new" : {
			"text-align" : resp_selectors
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__date-inner" : {
			"text-align" : resp_selectors
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__date-hide.uagb-timeline__date-inner" : {
			"text-align": resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__day-right .uagb-timeline__arrow:after" : {
			"border-right-color"  : backgroundColor,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__line" : {
			"left" : "calc( "+connectorBgsize+"px / 2 )",
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__author" :{
			"text-align": resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__link_parent" :{
			"text-align": resp_selectors,
		},
		" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__image a" :{
			"text-align": resp_selectors,
		},

		// CTA  AUthor
		" .uagb-timeline__author .dashicons-admin-users" : {
			"font-size" : authorFontSizeMobile+authorFontSizeType,
			"line-height": authorLineHeightMobile + authorLineHeightType,
		},
		" .uagb-timeline__author-link" :{
			"font-size" : authorFontSizeMobile+authorFontSizeType,
			"line-height": authorLineHeightMobile + authorLineHeightType,
		},
		" .uagb-timeline__link" :{
			"font-size" : ctaFontSizeMobile+ctaFontSizeType,
			"line-height": ctaLineHeightMobile + ctaLineHeightType,
		}
	}

	var styling_css = ""
	var id = `.block-editor-page #wpwrap #uagb-ctm-${ clientId }`

	styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css

}

export default contentTimelineStyle
