<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
        <!-- Bootstrap 3.3.2 -->
        <link href="<?php echo $base_url; ?>assets/adminlte/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <!-- Font Awesome Icons -->
        <link href="<?php echo $base_url; ?>assets/adminlte/awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <!-- Theme style -->
        <link href="<?php echo $base_url; ?>assets/adminlte/dist/css/AdminLTE.css" rel="stylesheet" type="text/css" />
        <!-- AdminLTE Skins. Choose a skin from the css/skins 
            folder instead of downloading all of them to reduce the load. -->
        <link href="<?php echo $base_url; ?>assets/adminlte/dist/css/skins/_all-skins.min.css" rel="stylesheet" type="text/css" />
        <!-- ADMIN CSS -->
        <link href="<?php echo $base_url; ?>assets/css/custom.css?541099" rel="stylesheet" type="text/css" />
        <!-- ADMIN CSS -->
        <link href="<?php echo $base_url; ?>assets/css/menu.css" rel="stylesheet" type="text/css" />
        <!-- EMPTY TEMPLATE CSS -->
        <link href="<?php echo $base_url; ?>assets/css/empty.css?50" rel="stylesheet" type="text/css" />
        <!-- Load CSS -->
        <?php
            foreach ($listCss as $css) {
                echo $css['url'];
            }
        ?>
        <link rel="shortcut icon" href="<?php echo $base_url; ?>assets/img/favicon.ico" />
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->
        <!-- jQuery 2.1.3 -->
        <script src="<?php echo $base_url; ?>assets/adminlte/plugins/jQuery/jQuery-2.1.3.min.js"></script>
    </head>
    <body id="empty_template">
        <?php echo $content; ?>
        <!-- Bootstrap 3.3.2 JS -->
        <script src="<?php echo $base_url; ?>assets/adminlte/bootstrap/js/bootstrap.min.js"></script>
        <!-- SlimScroll -->
        <script src="<?php echo $base_url; ?>assets/adminlte/plugins/slimScroll/jquery.slimscroll.min.js"></script>
        <!-- FastClick -->
        <script src="<?php echo $base_url; ?>assets/adminlte/plugins/fastclick/fastclick.min.js"></script>
        <!-- AdminLTE App -->
        <script src="<?php echo $base_url; ?>assets/adminlte/dist/js/app.js"></script>
        <!-- Custom JS -->
        <script src="<?php echo $base_url; ?>assets/js/custom.js"></script>
        <!-- Add fancyBox main JS and CSS files -->
        <script type="text/javascript" src="<?php echo $base_url; ?>assets/js/jquery.fancybox.js?v=2.1.5"></script>
        <link rel="stylesheet" type="text/css" href="<?php echo $base_url; ?>assets/css/jquery.fancybox.css?v=2.1.5" media="screen" />
        <!-- Load Javascript -->
        <?php
            foreach ($listJavascript as $js) {
                echo $js['url'];
            }
        ?>
    </body>
</html>