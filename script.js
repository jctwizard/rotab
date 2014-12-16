var currentTab = null;
var previousTabs = new Array();

var node = 
{
	var element;
	var children = new Array();
	var parent;
};

$(document).ready(function() 
{
	$("p").each(function()
	{
		var content = $(this).html();

		$("p").each(function()
		{
		    content = content.replace(this.id, "<strong class='link'>" + this.id + "</strong>");
		});

		$(this).html(content);
		$(this).hide();
	});

	currentTab = $("#start");
	currentTab.show();

	$("#header").html(id(currentTab));

	$(".link").click(function()
	{
		currentTab.hide();
		previousTabs.push(currentTab);

		currentTab = $("#" + $(this).html());
		currentTab.show();

		$("#header").html(id(currentTab));
		$("#back").html(id(previousTab()));
	});

	$("#back").click(function()
	{
		if (previousTabs.length != 0)
		{
			currentTab.hide();
			currentTab = previousTabs.pop();
			currentTab.show();

			$("#header").html(id(currentTab));

			if (previousTabs.length != 0)
			{
				$("#back").html(id(previousTab()));
			}

			else
			{
				$("#back").html("");
			}
		}
	});
});

function id(element)
{
	return element.prop("id");
}

function previousTab()
{
	var previousTab = previousTabs.pop();
	previousTabs.push(previousTab);

	return previousTab;
}