var min_id = 0;

$( document ).ready(function() {

    $('.print-header-hamburger').on('click',function () {

        $( '.print-menu' ).slideToggle( "slow", function() {

        });
    });

    $('.print-header-username').on('click',function () {

        $( '.print-header-personal_menu' ).slideToggle( "slow", function() {

        });
    });



    //---------------------------------------------------------------------------------------

    //---------------------------------------------------------------------------------------
    $(".print-create_account-form-personal_span").on('click',function () {

        $('.print-create_account-form-blue').css('min-height', '510px');
        $(".print-create_account-form-business-input").hide();

        $(".print-create_account-h2-business").addClass("print-create_account-h2-opacity");
        $(".print-create_account-h2-pesonal").removeClass("print-create_account-h2-opacity");

        $(".print-create_account-text-business").addClass("print-create_account-hidden");
        $(".print-create_account-text-personal").removeClass("print-create_account-hidden");

        $(".print-create_account-form-personal_span").addClass("print-create_account-active");
        $(".print-create_account-form-business_span").removeClass("print-create_account-active");
    });

    //---------------------------------------------------------------------------------------
    $(".print-create_account-form-business_span").on('click',function () {

        $('.print-create_account-form-blue').css('min-height', '640px');

        $(".print-create_account-form-business-input").show();

        $(".print-create_account-h2-pesonal").addClass("print-create_account-h2-opacity");
        $(".print-create_account-h2-business").removeClass("print-create_account-h2-opacity");

        $(".print-create_account-text-personal").addClass("print-create_account-hidden");
        $(".print-create_account-text-business").removeClass("print-create_account-hidden");

        $(".print-create_account-form-business_span").addClass("print-create_account-active");
        $(".print-create_account-form-personal_span").removeClass("print-create_account-active");
    });

    //---------------------------------------------------------------------------------------
    $(".print-personal_panel-inner_menu-item").on('click',function () {
        $(".print-personal_panel-inner_menu-item").removeClass("print-personal_panel-inner_menu-item-active");
        $(this).addClass("print-personal_panel-inner_menu-item-active");
    });
    //---------------------------------------------------------------------------------------
    $(".print-personal_panel-inner_menu-balance").on('click',function () {
        $(".print-personal_panel-block").hide();
        $(".print-personal_panel-balance-block").show();

    });
    $(".print-personal_panel-inner_menu-deposit").on('click',function () {
        $(".print-personal_panel-block").hide();
        $(".print-personal_panel-deposit-block").show();

    });
    $(".print-personal_panel-inner_menu-pay").on('click',function () {
        $(".print-personal_panel-block").hide();
        $(".print-personal_panel-pay-block").show();

    });
    $(".print-personal_panel-inner_menu-send").on('click',function () {
        $(".print-personal_panel-block").hide();
        $(".print-personal_panel-send-block").show();

    });
    $(".print-personal_panel-inner_menu-history").on('click',function () {
        $(".print-personal_panel-block").hide();
        $(".print-personal_panel-history-block").show();

    });

    //-----------------------------------------------------------------------------------------------



    $('.biolab-home-news-new').on('click',function () {
        if ($( this ).find('i').hasClass( "fa-chevron-right" )){
            $( this ).find('i').removeClass( "fa-chevron-right" );  
            $( this ).find('i').addClass( "fa-chevron-down" );
        }
        else {
            $( this ).find('i').removeClass( "fa-chevron-down" );    
            $( this ).find('i').addClass( "fa-chevron-right" );            
        }
        
        $( this ).find('p').slideToggle( "slow", function() {
          // Animation complete.
        });
    });	
  
    //-------------------------------------------------------------------------------------------    
    $('.biolab-labortiries-search-items p').on('click',function () {
        
        $( this ).addClass('.biolab-labortiries-search-item-active');
        $('.biolab-labortiries-search-box-select').text($( this ).text());
        $('.biolab-labortiries-search-items').hide();
        
        var code = parseInt($(this).attr("id"));
        
        $('.biolab-laboratirie').each(function() {
            if ($(this).hasClass("biolab-laboratirie-region-" + code)) {
                $(this).show();
            }	else 	$(this).hide();
        });
  
    });


    //---------------------------------------------------------------------------------------
    $(".Services-and-payments-tab").on('click',function () {
        $(".Invoices-tab").removeClass("print-personal_panel-block-inner-tab-active");
        $(this).addClass("print-personal_panel-block-inner-tab-active");
        $(".Invoices").hide();
        $(".Services-and-payments").show();
    });
    $(".Invoices-tab").on('click',function () {
        $(".Services-and-payments-tab").removeClass("print-personal_panel-block-inner-tab-active");
        $(this).addClass("print-personal_panel-block-inner-tab-active");
        $(".Services-and-payments").hide();
        $(".Invoices").show();
    });

    $(".All-tab").on('click',function () {
        $(".Sent-tab").removeClass("print-personal_panel-block-inner-tab-active");
        $(".Received-tab").removeClass("print-personal_panel-block-inner-tab-active");
        $(".Transferred-tab").removeClass("print-personal_panel-block-inner-tab-active");
        $(this).addClass("print-personal_panel-block-inner-tab-active");
        $(".Sent").hide();
        $(".Received").hide();
        $(".Transferred").hide();
        $(".All").show();
    });
    $(".Sent-tab").on('click',function () {
        $(".All-tab").removeClass("print-personal_panel-block-inner-tab-active");
        $(".Received-tab").removeClass("print-personal_panel-block-inner-tab-active");
        $(".Transferred-tab").removeClass("print-personal_panel-block-inner-tab-active");
        $(this).addClass("print-personal_panel-block-inner-tab-active");
        $(".All").hide();
        $(".Received").hide();
        $(".Transferred").hide();
        $(".Sent").show();
    });
    $(".Received-tab").on('click',function () {
        $(".Sent-tab").removeClass("print-personal_panel-block-inner-tab-active");
        $(".All-tab").removeClass("print-personal_panel-block-inner-tab-active");
        $(".Transferred-tab").removeClass("print-personal_panel-block-inner-tab-active");
        $(this).addClass("print-personal_panel-block-inner-tab-active");
        $(".Sent").hide();
        $(".All").hide();
        $(".Transferred").hide();
        $(".Received").show();
    });
    $(".Transferred-tab").on('click',function () {
        $(".Sent-tab").removeClass("print-personal_panel-block-inner-tab-active");
        $(".Received-tab").removeClass("print-personal_panel-block-inner-tab-active");
        $(".All-tab").removeClass("print-personal_panel-block-inner-tab-active");
        $(this).addClass("print-personal_panel-block-inner-tab-active");
        $(".Sent").hide();
        $(".Received").hide();
        $(".All").hide();
        $(".Transferred").show();
    });
    //-------------------------------------------------------------------------------------------

    $('.print-demo-Store-img').on('click',function () {

        href_temp =$('.print-demo-Store-main_img').find('img').attr('src');
        href_temp_2 =$( this ).find('img').attr('src');

        $( this ).find('img').attr("src", href_temp);
        $('.print-demo-Store-main_img').find('img').attr("src", href_temp_2);

    });

    $('.print-demo-Store-checkout-pay_with-item').on('click',function () {
        $(".print-demo-Store-checkout-pay_with-item").removeClass("print-demo-Store-checkout-pay_with-item-active");
        $(this).addClass("print-demo-Store-checkout-pay_with-item-active");
    });

});

//---------------------------------------------------------------

	
