<footer class="mt-32 pb-8">
    <div class="content-wrapper">
        <div
            class="border-t border-neutral-light pt-12 cluster gap-4 justify-between"
        >
            <a href="/" class="logo heading-text text-xl">CFS Consulting</a>
            <nav class="cluster gap-x-10 gap-y-4 main-nav">
                {{ nav:main_nav }}
                <a href="{{ url }}" class="relative">{{ title }}</a>
                {{ /nav:main_nav }}
            </nav>
        </div>
        <div class="cluster justify-between mt-24 text-sm">
            <div>
                <?php
                    date_default_timezone_set("America/Los_Angeles");
                    $now = date('Y');
                    echo "©{$now}"
                ?>
                {{ site_settings:site_name }}
            </div>
            <div></div>
            {{# <ul class="cluster gap-6">
                {{ nav:utility_nav }}
                    <li>
                        <a href="{{ url }}" class="hover:underline">{{ title }}</a>
                    </li>
                {{ /nav:utility_nav }}
            </ul> #}}
        </div>
    </div>
</footer>
