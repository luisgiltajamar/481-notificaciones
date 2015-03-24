

(function () {
    "use strict";
    var Notifications = Windows.UI.Notifications;

    function badge() {
        var notBadge = Notifications.BadgeUpdateManager.getTemplateContent(
            Notifications.BadgeTemplateType.badgeGlyph);

        var badgeAttr = notBadge.getElementsByTagName("badge");
        badgeAttr[0].setAttribute("value", "new Message");
        var notificacion = new Notifications.BadgeNotification(notBadge);

        Notifications.BadgeUpdateManager.
            createBadgeUpdaterForApplication().update(notificacion);

    }

    function liveTile() {
        var template = Notifications.TileTemplateType.
            tileWidePeekImageCollection03;

        var tileXml = Notifications.TileUpdateManager.getTemplateContent(template);
        var texto=tileXml.getElementsByTagName("text");

        texto[0].appendChild(tileXml.createTextNode("Notificacion en en tile"));

        var img = tileXml.getElementsByTagName("image");
        img[0].setAttribute("src", "ms-appx:///images/imagentile.png");

        var notificacion = new Notifications.TileNotification(tileXml);
        Notifications.TileUpdateManager.createTileUpdaterForApplication().
            update(notificacion);

    }

    function toast() {
        var manager = Notifications.ToastNotificationManager;
        var notificacion = manager.createToastNotifier();
        var plantilla = Notifications.ToastTemplateType.toastText02;
        var xml = manager.getTemplateContent(plantilla);

        var textos = xml.getElementsByTagName("text");
        textos[0].appendChild(xml.createTextNode("Soy una noti toast"));
        textos[1].appendChild(xml.createTextNode("Puedo ser muy plasta si quiero"));

        var toast = new Notifications.ToastNotification(xml);
        notificacion.show(toast);

    }

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            toast();
            //    badge();
            //    liveTile();
        }
    });
})();
