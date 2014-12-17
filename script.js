var currentTab = null;
var previousTabs = new Array();

$(document).ready(function() 
{
	$("p").each(function()
	{
		var content;

		if ($(this).prop("id") == "lorum")
		{
			content = justify_sin($(this).html(), 15)
		}

		else
		{
			content = justify_sqr($(this).html(), 4);
		}

		$("p").each(function()
		{
		    content = content.replace(this.id, "<strong class='link'>" + this.id + "</strong>");
		});

		$(this).html(content);
		$(this).hide();
	});

	currentTab = $("#start");
	center(currentTab);
	currentTab.show();

	$("#header").html(id(currentTab));
	center_x($("#header"));
	center_x($("#back"));
	place_below($("#back"), $("#header"));

	$(".link").click(function()
	{
		currentTab.hide();
		previousTabs.push(currentTab);

		currentTab = $("#" + $(this).html());
		center(currentTab);
		currentTab.show();

		$("#header").html(id(currentTab));
		$("#back").html(id(previous_tab()));
		center_x($("#header"));
		center_x($("#back"));
		place_below($("#back"), $("#header"));
	});

	$("#back").click(function()
	{
		if (previousTabs.length != 0)
		{
			currentTab.hide();
			currentTab = previousTabs.pop();
			center(currentTab);
			currentTab.show();

			$("#header").html(id(currentTab));
			center_x($("#header"));

			if (previousTabs.length != 0)
			{
				$("#back").html(id(previous_tab()));
			}

			else
			{
				$("#back").html("");
			}

			center_x($("#back"));
			place_below($("#back"), $("#header"));
		}
	});
});

function place_below(below, above)
{
	below.css("top", above.position().top + ((below.height() + above.height()) * 0.5));
}

function place_above(above, below)
{
	above.css("bottom", below.position().top - (above.height() * 0.5));
}

function center(element)
{
	element.css("top", ($(document).height() - element.height()) * 0.5);
	element.css("left", ($(document).width() - element.width()) * 0.5);
}

function center_x(element)
{
	element.css("left", ($(document).width() - element.width()) * 0.5);
}

function center_y(element)
{
	element.css("top", ($(document).height() - element.height()) * 0.5);
}

function id(element)
{
	return element.prop("id");
}

function previous_tab()
{
	var previousTab = previousTabs.pop();
	previousTabs.push(previousTab);

	return previousTab;
}

function justify_sin(string, lines)
{
	var new_text = "";
	var segment = Math.PI / lines;
	var avgLength = (string.length * (Math.PI / 2)) / lines;

	for (line = 1; line < lines; line++)
	{
		var lineLength = Math.ceil(avgLength * Math.sin(segment * line));

		if (string.length > lineLength)
		{
			var offset = -2;

			while ((string.slice(lineLength + offset, lineLength + offset + 1) != " ")
				&& !((lineLength + offset) > string.length))
			{
				offset++;
			}

			new_text += string.slice(0, lineLength + offset);
			new_text += "<br/>";
		
			string = string.slice(lineLength + offset);
		}

		else
		{
			break;
		}
	}

	new_text += string;

	return new_text;
}

function justify_sqr(string, lines)
{
	var new_text = "";
	var lineLength = string.length  / lines;

	for (line = 0; line < lines; line++)
	{
		if (string.length > lineLength)
		{
			var offset = -2;

			while ((string.slice(lineLength + offset, lineLength + offset + 1) != " ")
				&& !((lineLength + offset) > string.length))
			{
				offset++;
			}

			new_text += string.slice(0, lineLength + offset);
			new_text += "<br/>";
		
			string = string.slice(lineLength + offset);
		}

		else
		{
			break;
		}
	}

	new_text += string;

	return new_text;
}

function justify_circ(string, lines)
{
	var new_text = "";
	var lineLength = string.length  / lines;

	for (line = 0; line < lines; line++)
	{
		if (string.length > lineLength)
		{
			var offset = -2;

			while ((string.slice(lineLength + offset, lineLength + offset + 1) != " ")
				&& !((lineLength + offset) > string.length))
			{
				offset++;
			}

			new_text += string.slice(0, lineLength + offset);
			new_text += "<br/>";
		
			string = string.slice(lineLength + offset);
		}

		else
		{
			break;
		}
	}

	new_text += string;

	return new_text;
}