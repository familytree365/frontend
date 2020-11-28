<template>
    <div>
        <nav class="navbar is-fixed-top box-shadow-y">
        <div class="navbar-brand">
            <a role="button" class="navbar-burger toggler" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            <a href="dashboard.html" class="is-hidden-tablet navbar-item has-text-weight-bold has-text-black">
                <img src="~assets/images/main-logo.svg" alt="">
            </a>
            <a role="button" class="navbar-burger nav-toggler" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu has-background-white">
            <div class="navbar-end">
                <div class="mr-5 my-3 field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input is-small" type="email" placeholder="Search something">
                        <span class="icon is-small is-left">
                            <i class="fas fa-search"></i>
                        </span>
                    </p>
                </div>
                <div class="navbar-item has-dropdown is-hoverable nofication_dropdown">
                    <a href="#" class="navbar-item">
                        <i class="far fa-bell"></i>
                    </a>
                    <div class="navbar-dropdown is-right pt-0">
                        <div class="nofication_dropdown_content">
                            <a href="#" class="unread is-flex fd--r px-3">
                                <i class="fas fa-file-excel mr-3 mt-1"></i>
                                <div class="is-flex fd--c">
                                    <span class="is-size-7 has-text-black has-text-weight-medium"> Export available for
                                        download:
                                        People_Table_Report.xlsx </span>
                                    <span class="has-text-dark is-size-7 mt-1">20 mins ago</span>
                                </div>
                            </a>
                            <a href="#" class="is-flex fd--r px-3">
                                <i class="fas fa-file-excel mr-3 mt-1"></i>
                                <div class="is-flex fd--c">
                                    <span class="is-size-7 has-text-black has-text-weight-medium"> Export available for
                                        download:
                                        People_Table_Report.xlsx </span>
                                    <span class="has-text-dark is-size-7 mt-1">2 hrs ago</span>
                                </div>
                            </a>
                            <a href="#" class="is-flex fd--r px-3">
                                <i class="fas fa-file-excel mr-3 mt-1"></i>
                                <div class="is-flex fd--c">
                                    <span class="is-size-7 has-text-black has-text-weight-medium"> Export available for
                                        download:
                                        People_Table_Report.xlsx </span>
                                    <span class="has-text-dark is-size-7 mt-1">7 days ago</span>
                                </div>
                            </a>
                        </div>
                        <div class="is-flex pt-3 pb-2 px-3">
                            <a href="notifications.html"
                                class="button is-size-7 is-uppercase has-text-white has-background-primary has-text-weight-medium is-light mr-5">
                                <i class="fas fa-check mr-2"></i> Mark all Read</a>
                            <a href="notifications.html"
                                class="button is-size-7 is-uppercase has-text-dark is-outlined has-text-weight-medium">
                                <i class="fas fa-eye"></i> <span class="ml-2 is-hidden-mobile"> View
                                    all</span> </a>
                        </div>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a href="#" class="navbar-link user-navbar">
                        <div class="user-avatar has-background-primary mr-3">
                            <i class="fas fa-user"></i>
                        </div>
                        {{this.$auth.user.name}}
                    </a>
                    <div class="navbar-dropdown is-right">                          
                        <div class="profile_dropdown_content">
                            <div class="is-flex fd--r px-3 py-2">
                                <div class="user-avatar has-background-primary mr-3">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="is-flex fd--c ai--fs">
                                    <span class="is-size-7 has-text-black has-text-weight-medium">Curtis D.</span>
                                    <span class="is-size-7 has-text-dark">curtisd@gmail.com</span>
                                </div>
                            </div>
                            <hr class="navbar-divider" />
                            <a href="#" class="navbar-item">
                                <i class="fas fa-user-edit mr-2"></i>
                                Edit Profile
                            </a> 
                            <a href="#" class="navbar-item">
                                <i class="fas fa-money-bill mr-2"></i>
                                Subscription Plan : Trial
                            </a>                            
                            <a @click.prevent="logout()" class="navbar-item">
                                <i class="fas fa-sign-out-alt mr-2"></i>
                                Log Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div class="columns is-variable is-0 mb-0">
        <div>
            <div class="menu-container has-background-primary">
                <a href="dashboard.html" class="navbar-brand has-text-weight-bold has-text-black">
                    <img src="~assets/images/admin-logo.svg" alt="">
                </a>
                <div class="menu-wrapper py-1">
                    <aside class="menu">
                        <ul class="menu-list">
                            <li>
                                <NuxtLink to="/dashboard" class="is-active">
                                    <i class="fas fa-tachometer-alt icon"></i>
                                    Dashboard</NuxtLink>
                            </li>
                            <li>
                                <a href="calendar.html">
                                    <i class="fas fa-calendar icon"></i>
                                    Caelndar</a>
                            </li>
                            <li>
                                <a href="files.html">
                                    <i class="fas fa-file icon"></i>
                                    Files</a>
                            </li>
                            <li>
                                <a href="components.html">
                                    <i class="fas fa-user-tie icon"></i>
                                    Components</a>
                            </li>
                            <li class="collapsible">
                                <a href="#">
                                    <i class="fas fa-question-circle icon"></i>
                                    Information
                                    <i class="fas fa-angle-down is-pulled-right"></i>
                                </a>
                            </li>
                            <div class="content mb-0">
                                <ul>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Objects</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Addresses</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Chan</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Refn</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Subm</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Subn</a></li>
                                </ul>
                            </div>
                            <li class="collapsible">
                                <a href="#">
                                    <i class="fas fa-cog icon"></i>
                                    Sources
                                    <i class="fas fa-angle-down is-pulled-right"></i>
                                </a>
                            </li>
                            <div class="content mb-0">
                                <ul>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Repositories</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Sources</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Source Data</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Source Data Events</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Source Ref Events</a></li>
                                </ul>
                            </div>
                            <li class="collapsible">
                                <NuxtLink to="/people">
                                    <i class="fas fa-user-friends icon"></i>
                                    People
                                    <i class="fas fa-angle-down is-pulled-right"></i>
                                </NuxtLink>
                            </li>
                            <div class="content mb-0">
                                <ul>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> People</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Person Aliases</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Person Anci</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Person Association</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Person Events</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Person LDS</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Person Subm</a></li>
                                </ul>
                            </div>
                            <li class="collapsible">
                                <a href="#">
                                    <i class="fas fa-heart icon"></i>
                                    Family
                                    <i class="fas fa-angle-down is-pulled-right"></i>
                                </a>
                            </li>
                            <div class="content mb-0">
                                <ul>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Families</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Family Events</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Family Slugs</a></li>
                                </ul>
                            </div>
                            <li class="collapsible">
                                <a href="#">
                                    <i class="fas fa-thumbs-up icon"></i>
                                    References
                                    <i class="fas fa-angle-down is-pulled-right"></i>
                                </a>
                            </li>
                            <div class="content mb-0">
                                <ul>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Citations</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Notes</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Places</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Types</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Authors</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Publications</a></li>
                                </ul>
                            </div>
                            <li class="collapsible">
                                <a href="#">
                                    <i class="fas fa-users icon"></i>
                                    Trees
                                    <i class="fas fa-angle-down is-pulled-right"></i>
                                </a>
                            </li>
                            <div class="content mb-0">
                                <ul>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Show</a></li>
                                    <li><a href="#"> <i class="fas fa-angle-right mr-1"></i> Trees</a></li>
                                </ul>
                            </div>
                            <li>
                                <a href="gedcom.html">
                                    <i class="fas fa-file-import icon"></i>
                                    GEDCOM Import</a>
                            </li>
                            <li>
                                <a href="subscription.html">
                                    <i class="fas fa-rocket icon"></i>
                                    Subscription</a>
                            </li>
                            <li>
                                <a href="dnaupload.html">
                                    <i class="fas fa-file-upload icon"></i>
                                    DNA Upload</a>
                            </li>
                            <li>
                                <a href="dashboard.html">
                                    <i class="fas fa-dna icon"></i>
                                    DNA Matching</a>
                            </li>
                            <li>
                                <a href="videos.html">
                                    <i class="fas fa-video icon"></i>
                                    How to Videos</a>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
        <div class="column is-10-desktop is-offset-2-desktop is-9-tablet is-offset-3-tablet is-12-mobile pb-0">
            <div class="p-1 wrapper">
                <Nuxt />
                <footer class="footer mt-5">
                    Copyright &copy; 2020 Genealogia Ltd
                </footer>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    middleware: "auth",
    methods: {
    async logout() {
      await this.$auth.logout();
    },
}
}
</script>

 <style scoped>
    @import '~/assets/css/admin.css';
</style>
