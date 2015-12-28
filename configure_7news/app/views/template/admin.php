<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>7NEWS</title>
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
        <link href="<?php echo $base_url; ?>assets/adminlte/plugins/datepicker/datepicker3.css" rel="stylesheet" type="text/css" />
        <!-- ADMIN CSS -->
        <link href="<?php echo $base_url; ?>assets/css/custom.css?541099" rel="stylesheet" type="text/css" />
        <!-- ADMIN CSS -->
        <link href="<?php echo $base_url; ?>assets/css/menu.css" rel="stylesheet" type="text/css" />
        <!-- BACK TO TOP CSS -->
        <link href="<?php echo $base_url; ?>assets/css/back_to_top.css" rel="stylesheet" type="text/css" />
        <!-- Load CSS -->
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
    <body class="skin-blue">
        <div class="wrapper">
            <header class="main-header">
                <a href="<?php echo $base_url; ?>employee/" class="logo" text-align="left">
                <img src="<?php echo $base_url; ?>assets/img/logo.png" alt="logo" width="auto" height="35px" title="logo" border="0px" />
                </a>
                <!-- Header Navbar: style can be found in header.less -->
                <nav class="navbar navbar-static-top" role="navigation">
                    <!-- Sidebar toggle button-->
                    <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button"></a>
                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">
                            <!-- User Account: style can be found in dropdown.less -->
                            <li class="dropdown user user-menu">
                                <a>
                                </a>
                            </li>
                            <li>
                                <a href="<?php echo $base_url; ?>auth/logout">
                                <span class="hidden-xs">ログアウト</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <!-- Left side column. contains the logo and sidebar -->
            <aside class="main-sidebar">
                <!-- sidebar: style can be found in sidebar.less -->
                <section class="sidebar" id="cssmenu">
                    <!-- sidebar menu: : style can be found in sidebar.less -->
                    <ul>
                        <li class="has-sub
                            <a href='<?php echo $base_url; ?>employee/'><span><i class="fa fa-users"></i>人員管理表</span></a>
                            <ul>
                                <li>
                                    <a href='<?php echo $base_url; ?>employee/'><span>人員一覧</span></a>
                                </li>
                                <li>
                                    <a href='<?php echo $base_url; ?>employee/csvImport/'><span>新規一括登録</span></a>
                                </li>
                                <li>
                                    <a href='<?php echo $base_url; ?>seat/'><span>座席確認</span></a>
                                </li>
                                <li>
                                    <a href='<?php echo $base_url; ?>manpowerplan/'><span>要員計画</span></a>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="has-sub
                        <?php if (array_search(strtolower(Request::active()->controller), array('controller_outsourcing', 'controller_tmpemployee')) !== false ) { echo 'active'; } ?>">
                            <a href='#'><span><i class="fa fa-archive"></i><span>業務委託・派遣種別管理</span></span></a>
                            <ul>
                                 <li>
                                     <a href='<?php echo $base_url; ?>outsourcing/'><span>常駐業務委託一覧</span></a>
                                 </li>
                                 <li>
                                    <a href='<?php echo $base_url; ?>tmpemployee/'><span>派遣社員一覧</span></a>
                                 </li>
                            </ul>
                        </li>
                        
                        <li class=" <?php if (array_search(strtolower(Request::active()->controller), array('controller_orgchart')) !== false ) { echo 'active'; } ?>">
                            <a href='<?php echo $base_url; ?>orgchart/'><span><i class="fa fa-area-chart"></i>組織図</span></a>
                        </li>
                        <!-- 
                        <li>
                            <a href='#'><span><i class="fa fa-list"></i>メーリングリスト</span></a>
                        </li>
                        <li>
                            <a href='#'><span><i class="fa fa-mobile"></i>社用携帯端末管理</span></a>
                        </li>
                         -->
                        <li class="has-sub
                            <a href='#'><span><i class="fa fa-eye"></i>マスタ管理</span></a>
                            <ul>
                                <li>
                                    <a href="<?php echo $base_url; ?>masterorganization/orgList"><span>組織</span></a>
                                </li>
                                <li>
                                    <a href="<?php echo $base_url; ?>masteremployeetype"><span>雇用形態</span></a>
                                </li>
                                <li>
                                    <a href="<?php echo $base_url; ?>mastermanageposition"><span>役職</span></a>
                                </li>
                                <li>
                                    <a href="<?php echo $base_url; ?>mastercompany"><span>会社名</span></a>
                                </li>
                                <li>
                                    <a href="<?php echo $base_url; ?>masterorgchart"><span>組織図</span></a>
                                </li>
                            </ul>
                        </li>
                        <li class="has-sub
                            <?php if (array_search(strtolower(Request::active()->controller), array('controller_systemauthority')) !== false ) { echo 'active'; } ?>">
                            <a href='#'><span><i class="fa fa-eye"></i>システム管理</span></a>
                            <ul>
                                <li>
                                    <a href="<?php echo $base_url; ?>systemauthority"><span>システム利用権限管理</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <!-- /.sidebar -->
            </aside>
            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <?php if (isset($topicPath)): ?>
                    <div class="breadcrumb">
                    <?php
                        if (count($topicPath) == 1) {
                            echo $topicPath[0]['name'];
                        } else {
                            foreach ($topicPath as $key => $value) {
                                if ($key) {
                                    echo "&nbsp;&nbsp;&gt;&nbsp;&nbsp;";
                                }
                                if ($value['url'] != "") {
                                    echo "<a href='" . $value['url'] . "'>" . $value['name'] . "</a>";
                                } else {
                                    echo $value['name'];
                                }
                            }
                        }
                    ?>
                    </div>
                <?php endif; ?>
                <?php echo $content; ?>
                <div class="clearfix"></div>
            </div>
            <!-- /.content-wrapper -->
            <footer class="main-footer">
                <strong>Copyright © 2015-2015 <a target="_blank" href="http://gurunavi.com">Gurunavi, Inc</a>.</strong> All rights reserved.
            </footer>
        </div>
        <!-- ./wrapper -->
        <!-- Bootstrap 3.3.2 JS -->
        <script src="<?php echo $base_url; ?>assets/adminlte/bootstrap/js/bootstrap.min.js"></script>
        <!-- SlimScroll -->
        <script src="<?php echo $base_url; ?>assets/adminlte/plugins/slimScroll/jquery.slimscroll.min.js"></script>
        <!-- FastClick -->
        <script src="<?php echo $base_url; ?>assets/adminlte/plugins/fastclick/fastclick.min.js"></script>
        <!-- AdminLTE App -->
        <script src="<?php echo $base_url; ?>assets/adminlte/dist/js/app.js"></script>
        <!-- AdminLTE for demo purposes -->
        <script src="<?php echo $base_url; ?>assets/adminlte/dist/js/demo.js"></script>
        <!-- Check all checkbox -->
        <script src="<?php echo $base_url; ?>assets/js/checkall.js"></script>
        <!-- Custom JS -->
        <script src="<?php echo $base_url; ?>assets/js/custom.js"></script>
        <script src="<?php echo $base_url; ?>assets/adminlte/plugins/datepicker/bootstrap-datepicker.js"></script>
        <script src="<?php echo $base_url; ?>assets/adminlte/plugins/datepicker/locales/bootstrap-datepicker.ja.min.js"></script>
        <script src="<?php echo $base_url; ?>assets/js/datepicker_custom.js"></script>
        <!-- Add fancyBox main JS and CSS files -->
        <script type="text/javascript" src="<?php echo $base_url; ?>assets/js/jquery.fancybox.js?v=2.1.5"></script>
        <link rel="stylesheet" type="text/css" href="<?php echo $base_url; ?>assets/css/jquery.fancybox.css?v=2.1.5" media="screen" />
        <!-- Load Javascript -->
     <a href="#0" class="cd-top">Top</a>
    </body>
</html>