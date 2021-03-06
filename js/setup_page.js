/**
 * Created with JetBrains WebStorm.
 * User: kono
 * Date: 2013/07/30
 * Time: 10:32
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {

    // For drop down menu
    $('.dropdown-toggle').dropdown();

    var responsiveNav =
        '<div class="container"><nav class="navbar navbar-default" role="navigation">' +
            '<div class="container-fluid">' +

            '<div class="navbar-header">' +
            '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#cy-navbar">' +
            '<span class="sr-only">Toggle navigation</span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '<span class="icon-bar"></span>' +
            '</button>' +
            '<a class="navbar-brand" href="index.html">Cytoscape</a>' +
            '</div>' +

            '<div class="collapse navbar-collapse" id="cy-navbar">' +
            '<ul class="nav navbar-nav">' +
            '<li class="dropdown">' +
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Introduction<b class="caret"></b></a>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="what_is_cytoscape.html">What is Cytoscape?</a></li>' +
            '<li><a href="who_is_using.html">Who is Using Cytoscape</a></li>' +
            '<li><a href="screenshots.html">Screenshots</a></li>' +
            '</ul></li>' +
            '<li><a href="download.html">Download</a></li>' +

            '<li><a href="http://apps.cytoscape.org/" target="_blank">Apps</a></li>' +

            '<li class="dropdown">' +
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Documentation<b class="caret"></b></a>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="documentation_users.html">For Users</a></li>' +
            '<li><a href="documentation_developers.html">For Developers</a></li>' +
            '<li><a href="releasenotes.html">Release Notes</a></li>' +
            '<li><a href="http://wiki.cytoscape.org/">Wiki</a></li>' +
            '<li><a href="http://opentutorials.cgl.ucsf.edu/index.php/Portal:Cytoscape3">Open Tutorials</a></li>' +
            '</ul></li>' +

            '<li class="dropdown">' +
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown">Community<b class="caret"></b></a>' +
            '<ul class="dropdown-menu">' +
            '<li><a href="development_team.html">Developer Team</a></li>' +
            '<li><a href="community.html">Social Media</a></li>' +
            '<li><a href="http://nrnb.org/cyretreat/">Conferences</a></li>' +
            '<li><a href="http://nrnb.org/training.html">Training</a></li>' +
            '</ul></li>' +

            '<li><a href="http://chianti.ucsd.edu/cyto_web/bugreport/bugreport.php">Report a Bug</a></li>' +
            '<li><a class="cy3-color" href="https://groups.google.com/forum/#!forum/cytoscape-helpdesk">Getting Help</a></li>' +
            '</ul>' +

            '</div></div></nav></div>';


    $('body').prepend(responsiveNav);

    // Footer
    var footerText = '<div class="container"><div class="row">' +
        '<div class="col-xs-12 col-md-8"><p class="text-muted text-left">' +
        'Funding for continued development and maintenance of Cytoscape is provided by the U.S. ' +
        '<a href="http://www.nigms.nih.gov">National Institute of General Medical Sciences (NIGMS)</a> ' +
        'under award number GM070743.  ' +
        'Cytoscape user support, education and new initiatives are supported by the ' +
        '<a href="http://nrnb.org">National Resource for Network Biology (NRNB)</a> under award ' +
        'numbers P41 RR031228 and GM103504.</p>' +
        '<p class="text-muted text-center">&copy;2001-2014 <a href="http://www.cytoscapeconsortium.org/">' +
        'Cytoscape Consortium</a></p>' +

        '</div><div class="col-xs-12 col-md-4">' +
        '<form class="navbar-form navbar-left" action=\"http://www.google.com/search\">' +
        '<input type=\"hidden\" name=\"hl\" value=\"en\">' +
        '<input type=\"hidden\" name=\"hq\" value=\"inurl:www.cytoscape.org/\">' +
        '<input type=\"hidden\" name=\"ie\" value=\"UTF-8\">' +
        '<input type=\"hidden\" name=\"oe\" value=\"UTF-8\">' +
        '<input type=\"hidden\" name=\"filter\" value=\"0\">' +
        '<input placeholder="Search Cytoscape.org" class=\"form-control\" style=\"width: 60%;\"' +
        'type=\"text\" name=\"q\">' +
        '<button class="btn btn-default" type=\"submit\" name=\"btnG\">Search</button>' +
        '</form></div></div>' +
        '<script src="http://www.google-analytics.com/urchin.js"></script>' +
        '<script type="text/javascript">_uacct = "UA-155159-2"; urchinTracker();</script></div>';

    $('footer').append(footerText);

});