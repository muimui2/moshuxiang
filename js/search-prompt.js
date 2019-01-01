
$(function () {
    $.fn.search.settings.templates.category = function(response, fields) {
        var
            html = '',
            escape = $.fn.search.settings.templates.escape
        ;
        if(response[fields.categoryResults] !== undefined) {

            // each category
            $.each(response[fields.categoryResults], function(currentIndex, category) {
                if(category[fields.results] !== undefined && category.results.length > 0) {

                    html  += '<div class="category">';

                    //分类标题名
                    if(category[fields.categoryName] !== undefined) {
                        html += '<div class="name">' + category[fields.categoryName] + '</div>';
                    }

                    // each item inside category
                    html += '<div class="results">';
                    $.each(category.results, function(index, result) {
                        //建议条目URL
                        if(result[fields.url]) {
                            html  += '<a class="result" href="' + result[fields.url] + '">';
                        }
                        else {
                            html  += '<a class="result">';
                        }

                        html += '<div class="content">';
                        if(result[fields.image] !== undefined){
                            html += '<div class="image-container">';
                            if(currentIndex === "users"){
                                html += '<img class="image search-user-image" src="' + result.image + '">'
                            }
                            else if(currentIndex === "collections"){
                                html += '<img class="image search-collection-image" src="' + result.image + '">'
                            }
                            else{
                                html += '<img class="image" src="' + result.image + '">'
                            }
                            html  += ''
                                + '</div>';
                        }

                        if(result[fields.title] !== undefined || result[fields.description] !== undefined){
                            html += '<div class="search-summary">';
                            if(result[fields.title] !== undefined) {
                                html += '<div class="title">' + result[fields.title] + '</div>';
                            }
                            if(result[fields.description] !== undefined) {
                                html += '<div class="description">' + result[fields.description] + '</div>';
                            }
                            html  += ''
                                + '</div>';
                        }

                        html  += ''
                            + '</div>'
                        ;
                        html += '</a>';
                    });
                    html += '</div>';
                    html  += ''
                        + '</div>'
                    ;
                }
            });
            if(response[fields.action]) {
                html += ''
                    + '<a href="' + response[fields.action][fields.actionURL] + '" class="action">'
                    +   response[fields.action][fields.actionText]
                    + '</a>';
            }
            return html;
        }
        return false;
    };

    $('.ui.search')
        .search({
            type          : 'category',
            transition    : "fade",
            minCharacters : 3,
            showNoResults: false,
            // duration: 0,
            // searchDelay: 0,

            fields: {
                categories      : 'keywords',     // array of categories (category view)
                categoryName    : 'name',        // name of category (category view)
                categoryResults : 'results',     // array of results (category view)
                description     : 'description', // result description
                image           : 'image',       // result image
                price           : 'price',       // result price
                results         : 'results',     // array of results (standard)
                title           : 'title',       // result title
                action          : 'action',      // "view more" object name
                actionText      : 'text',        // "view more" text
                actionURL       : 'url'          // "view more" url
            },
            searchFields: [
                'title'
            ],
            apiSettings   : {
                onResponse: function(apiResponse) {
                    var
                        response = {
                            results      : {}
                        }
                    ;

                    $.each(apiResponse.keywords, function(index, item) {
                        var maxResults = 3;
                        if(index >= maxResults) {
                            return false;
                        }
                        if(response.results["keywords"] === undefined) {
                            response.results["keywords"] = {
                                results : []
                            };
                        }
                        response.results["keywords"].results.push({
                            title       : item.word,
                            url         : item.url
                        });
                    });

                    $.each(apiResponse.users, function(index, item) {
                        var maxResults = 3;
                        if(index >= maxResults) {
                            return false;
                        }
                        if(response.results["users"] === undefined) {
                            response.results["users"] = {
                                name    : "用户",
                                results : []
                            };
                        }
                        response.results["users"].results.push({
                            image    : item.avatarUrl,
                            title       : item.username,
                            description : item.description,
                            url         : item.url
                        });
                    });

                    $.each(apiResponse.collections, function(index, item) {
                        var maxResults = 3;
                        if(index >= maxResults) {
                            return false;
                        }
                        if(response.results["collections"] === undefined) {
                            response.results["collections"] = {
                                name    : "文集",
                                results : []
                            };
                        }
                        response.results["collections"].results.push({
                            image    : item.avatarUrl,
                            title       : item.title,
                            description : item.description,
                            url         : item.url
                        });
                    });

                    $.each(apiResponse.columns, function(index, item) {
                        var maxResults = 3;
                        if(index >= maxResults) {
                            return false;
                        }
                        if(response.results["columns"] === undefined) {
                            response.results["columns"] = {
                                name    : "专栏",
                                results : []
                            };
                        }
                        response.results["columns"].results.push({
                            image    : item.avatarUrl,
                            title       : item.title,
                            description : item.description,
                            url         : item.url
                        });
                    });
                    return response;
                },
                // url: '//api.github.com/search/repositories?q={query}'
                url: "http://localhost:8080/api"
            }
        });
});