<?php
declare(strict_types=1);

use OCA\Music\Utility\HtmlUtil;

/**
 * @var array $_
 * @var \OCP\IL10N $l
 */

HtmlUtil::addWebpackScript('admin_settings');
HtmlUtil::addWebpackStyle('app');
HtmlUtil::addWebpackStyle('admin_settings');
?>
<div id="admin-music"></div>