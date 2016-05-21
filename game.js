$(document).ready(function () {
    var start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9];
    var prevValue = 0;
    var fileName = 0;
    var countWhite = 0;
    var countBlue = 0;
    var prevObj;
    var notDashed = "0px none rgb(255, 255, 254)";
    var dashed = "rgba(0, 0, 255, 0.4)";
    $.each(start, function (index, value) {
        $('<img class="square" src="Images/' + value + '.png" />').appendTo('#field');
    });
    $('#next').bind("click", function () {
        $.each($('img.square'), function (index, value) {
            if (!($(this).css('background-color') == dashed)) {
                $(this).css('border', 'none');
                $(this).css('background-color', 'rgba(0, 0, 0, 0)');
                $(this).clone(true).appendTo('#field');
            }
        });
        $('#nav>p#white').html($('img.square').length - countBlue);
    });
    $('#newGame').bind("click", function () {
        location.reload();
    })
    $('img.square').bind("click", function (e) {
        top: {
            var count;
            if ($(e.target).css('background-color') == "rgba(0, 0, 0, 0)") {
                if (fileName == 0) {
                    $(e.target).css('background-color', 'rgba(255, 0, 0, 0.3)');
                    prevValue = -1;
                    //check left column
                    if (parseInt($(e.target).index('img.square')) % 9 == 0) {
                        count = 1;
                        //check if right square is blue
                        do {
                            if ($('img.square').eq((parseInt($(e.target).index('img.square'))) + count).css('background-color') != dashed) {
                                $('img.square').eq((parseInt($(e.target).index('img.square'))) + count).css('border', notDashed);
                                break;
                            }
                            else {
                                count++;
                            }
                        }
                        while (count + (parseInt($(e.target).index('img.square')) % 9) < 9);
                    }
                    //check right column
                    if (parseInt($(e.target).index('img.square')) % 9 == 8) {
                        count = 1;
                        //check if left square is blue
                        do {
                            if ($('img.square').eq((parseInt($(e.target).index('img.square'))) - count).css('background-color') != dashed) {
                                $('img.square').eq((parseInt($(e.target).index('img.square'))) - count).css('border', notDashed);
                                break;
                            }
                            else {
                                count++;
                            }
                        }
                        while (count <= (parseInt($(e.target).index('img.square')) % 9));
                    }
                    //check middle columns
                    if ((parseInt($(e.target).index('img.square')) % 9 > 0) && (parseInt($(e.target).index('img.square')) % 9 < 8)) {
                        count = 1;
                        //check if right square is blue
                        do {
                            if ($('img.square').eq((parseInt($(e.target).index('img.square'))) + count).css('background-color') != dashed) {
                                $('img.square').eq((parseInt($(e.target).index('img.square'))) + count).css('border', notDashed);
                                break;
                            }
                            else {
                                count++;
                            }
                        }
                            //check if left squre is blue
                        while (count + (parseInt($(e.target).index('img.square')) % 9) < 9);
                        count = 1;
                        do {
                            if ($('img.square').eq((parseInt($(e.target).index('img.square'))) - count).css('background-color') != dashed) {
                                $('img.square').eq((parseInt($(e.target).index('img.square'))) - count).css('border', notDashed);
                                break;
                            }
                            else {
                                count++;
                            }
                        }
                        while (count <= (parseInt($(e.target).index('img.square')) % 9));
                    }
                    //check first row
                    if ((parseInt($(e.target).index('img.square')) >= 0) && (parseInt($(e.target).index('img.square')) < 9)) {
                        count = 1;
                        //check if bottom square is blue
                        do {
                            if ($('img.square').eq((parseInt($(e.target).index('img.square'))) + 9 * count).css('background-color') != dashed) {
                                $('img.square').eq((parseInt($(e.target).index('img.square'))) + 9 * count).css('border', notDashed);
                                break;
                            }
                            else {
                                count++;
                            }
                        }
                        while ((9 * count + (parseInt($(e.target).index('img.square')) % 9)) < (parseInt($('img.square').length)));
                    }
                    //check last row
                    if ((parseInt($(e.target).index('img.square')) >= (parseInt($('img.square').length) - 9)) && (parseInt($(e.target).index('img.square')) < (parseInt($('img.square').length)))) {
                        count = 1;
                        //check if upper square is blue
                        do {
                            if ($('img.square').eq((parseInt($(e.target).index('img.square'))) - 9 * count).css('background-color') != dashed) {
                                $('img.square').eq((parseInt($(e.target).index('img.square'))) - 9 * count).css('border', notDashed);
                                break;
                            }
                            else {
                                count++;
                            }
                        }
                        while ((9 * count + (parseInt($(e.target).index('img.square')) % 9)) < (parseInt($('img.square').length)));
                    }
                    //check middle rows
                    if ((parseInt($(e.target).index('img.square')) >= 9) && (parseInt($(e.target).index('img.square')) < (parseInt($('img.square').length) - 9))) {
                        count = 1;
                        //check if bottom square is blue
                        do {
                            if ($('img.square').eq((parseInt($(e.target).index('img.square'))) + 9 * count).css('background-color') != dashed) {
                                $('img.square').eq((parseInt($(e.target).index('img.square'))) + 9 * count).css('border', notDashed);
                                break;
                            }
                            else {
                                count++;
                            }
                        }
                            //check if upper square is blue
                        while ((9 * count + (parseInt($(e.target).index('img.square')) % 9)) < (parseInt($('img').length)));
                        count = 1;
                        do {
                            if ($('img.square').eq((parseInt($(e.target).index('img.square'))) - 9 * count).css('background-color') != dashed) {
                                $('img.square').eq((parseInt($(e.target).index('img.square'))) - 9 * count).css('border', notDashed);
                                break;
                            }
                            else {
                                count++;
                            }
                        }
                        while ((9 * count + (parseInt($(e.target).index('img.square')) % 9)) < (parseInt($('img.square').length)));
                    }
                }
                fileName = ($(e.target).attr('src')).substring(7, 8);
                if ((prevValue != 0 && ((parseInt(fileName) + parseInt(prevValue) == 10) || (fileName == prevValue))) && ($(e.target).css('border') == notDashed)) {
                    $(e.target).css('background-color', dashed);
                    prevObj.css('background-color', dashed);
                    $('img.square').css('border', 'none');
                    countBlue = 0;
                    countWhite = 0;
                    $.each($('img.square'), function (index, value) {
                        if ($(this).css('background-color') == dashed) {
                            countBlue++;
                        }
                        else if ($(this).css('background-color') == "rgba(0, 0, 0, 0)") {
                            countWhite++;
                        }
                    });
                    $('#nav>p#blue').html(countBlue);
                    $('#nav>p#white').html(countWhite);
                    prevValue = 0;
                    fileName = 0;
                }
                else if (prevValue == -1) { }
                else {
                    prevObj.css('background-color', 'rgba(0, 0, 0, 0)');
                    $('img.square').css('border', 'none');
                    prevValue = 0;
                    fileName = 0;
                }
            }
            else if ($(e.target).css('background-color') == dashed) {
                break top;
            }
            prevValue = fileName;
            prevObj = $(e.target);
        }
    });
    $('#btnPopup').click(function (e) {
        e.preventDefault(); e.stopPropagation();
        window.location.href = $(e.currentTarget).data().href;
    });
});