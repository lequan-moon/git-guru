<?php
use Util\Common;
use Fuel\Core\DB;
use Fuel\Core\Config;
use Fuel\Core\Asset;
use Fuel\Core\Uri;
use Fuel\Core\Controller_Template;
use Model\Organization;
use Fuel\Core\Session;
use Fuel\Core\Response;
use Fuel\Core\Request;

class Controller_Top extends Controller_Template {
	public $template = "template/admin";
	
	public function setTemplate($template) {
        $this->template = $template;
        $this->template = \View::forge($this->template);
    }
}