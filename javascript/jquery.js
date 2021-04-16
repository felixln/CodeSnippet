
$.noConflict(boolean);

#Immediately-Invoked Function Expression, IIFE(立即调用函数表达式)
(function($) {
	//statement
})(jQuery);

==== Selector =====
$('#id')  // ID selector
$('div')  // tag selector
$('.bule') // css class selector
$('[href]') // select by property
$('div.a.b.c ul li a[href^=http][attr]') // chain classes and properties

$('div, span') // combination select, only search the DOM tree once.

$('div', context) // restrict the selection under the context.
$('div ul') equals to $('ul', 'div')

* Matches any element.
E Matches all element with tag name E.

// hierarchy
E F Matches all elements with tag name F that are descendents of E.  <E><X><F/></X></E>
E>F Matches all elements with tag name F that are direct children of E.  <E><F/></E>
E+F Matches all elements F immediately preceded by sibling E.  <E/><F/>
E~F Matches all elements F preceded by any sibling E.  <E/><other tags/>...<F/>

//attributes selector
E[A] Matches all elements E that exists attribute A, with attribute A of any value.
E[A=V] equal to, Matches all elements E with attribute A whose value is exactly V.
E[A^=V] begins with (or equal), Matches all elements E with attribute A whose value begins with V, like regular expression.
E[A$=V] ends with (or equal), Matches all elements E with attribute A whose value ends with V, like regular expression.
E[A!=V]  not equal.
E[A*=V] contains (or equal), Matches all elements E with attribute A whose value contains V.
E[A|=V] begins with or equal to? Felix: just equal to
E[A~=V], seems the same as  E[A*=V] contains
E[C1][C2] chain attributes 

//-------- filters or CSS pseudo-classes --------------

// jQuery.in.Action.2008.Manning: 
// For CSS com-patibility,  nth-child starts with 1, but the jQuery custom selectors follow the more common programming convention of starting at 0. 

// jQuery filters
// the world is flat here, nothing about to DOM hierachy
// index starting at 0
// base on the selection context
:first
:last
:even
:odd
:eq(n) // index equal to n
:gt(n)  // greater than 
:lt(n)  // less than

// tr td:first, select the first <td> in the table, only 1 <td> selected, no matter how many rows(<tr>)
// tr td:first-child, select the first <td> of each row <tr>, the return number is the same as the number of <tr>
// so 'tr td:first' is not equal to 'tr td:first-child'

// CSS psudo-classes
//consider the sibling that don't have the same type
:first-child
:last-child
:nth-child(n) // n starts with 1
:nth-child( even | odd )
:nth-child( Xn+Y)
:nth-last-child(n)  // count down
:nth-last-child( even | odd )
:nth-last-child( Xn+Y)
:only-child  // orphan, so sibling

//only consider the siblings which have the same type
:first-of-type
:last-of-type
:nth-of-type(n) // n starts with 1
:nth-of-type( even | odd )
:nth-of-type( Xn+Y)
:nth-last-of-type(n)  // count down
:nth-last-of-type( even | odd )
:nth-last-of-type( Xn+Y)
:only-of-type  // only 1 of the giving type, may be have siblings.

// form filter

:checkbox  // input[type=checkbox]
:checked    // checkbox, radio, select/option
:disabled
:enabled
:file
:focus
:image  // input[type=image]
:input   // iniput select, textarea, button
:password
:radio
:reset  // input[type=reset], button[type=reset]
:selected // option
:submit 
:text   // input[type=text] or default input

input:checkbox:check 
input:checkbox:not(:checked)

// content filters
:contains(text)
:empty   // no child elements or text
:has( selector )
:parent  // contains any child elements or text

// other filters
:not( selector )
:animated
:header  // h1~6
:hidden
:lang( language )
:root
:target
:visible




E:has(F) Matches all elements with tag name E that have at least one descendent with tag name F.





