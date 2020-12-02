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
                            <font-awesome-icon :icon="['fas', 'user']"/>
                        </div>
                        {{ loggedInUser.first_name }}
                    </a>
                    <div class="navbar-dropdown is-right">
                        <div class="profile_dropdown_content">
                            <div class="is-flex fd--r px-3 py-2">
                                <div class="user-avatar has-background-primary mr-3">
                                    <font-awesome-icon :icon="['fas', 'user']"/>
                                </div>
                                <div class="is-flex fd--c ai--fs">
                                    <span class="is-size-7 has-text-black has-text-weight-medium"> {{ loggedInUser.first_name }}  </span>
                                    <span class="is-size-7 has-text-dark">{{ loggedInUser.email }}  </span>
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
                                <NuxtLink to="/dashboard">
                                    <font-awesome-icon :icon="['fas', 'tachometer-alt']" class="mt-1 mr-2" />
                                    Dashboard</NuxtLink>
                            </li>
                            <li>
                                <a href="calendar.html">
                                    <font-awesome-icon :icon="['fas', 'calendar']" class="mt-1 mr-2" />
                                    Caelndar</a>
                            </li>
                            <li>
                                <a href="files.html">
                                    <font-awesome-icon :icon="['fas', 'file']" class="mt-1 mr-2" />
                                    Files</a>
                            </li>
                            <li>
                                <a href="components.html">
                                    <font-awesome-icon :icon="['fas', 'user-tie']" class="mt-1 mr-2" />
                                    Components</a>
                            </li>
                            <li class="collapsible is-active">
                                <a href="#">
                                    <font-awesome-icon :icon="['fas', 'question-circle']" class="mt-1 mr-2" />
                                    Information
                                    <font-awesome-icon :icon="['fas', 'angle-down']" class="mt-1 mr-2 is-pulled-right" />
                                </a>
                            </li>
                            <div class="content mb-0">
                                <ul>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Objects</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Addresses</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Chan</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Refn</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Subm</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Subn</a></li>
                                </ul>
                            </div>
                            <li class="collapsible">
                                <a href="#">
                                    <font-awesome-icon :icon="['fas', 'cog']" class="mt-1 mr-2" />
                                    Sources
                                    <font-awesome-icon :icon="['fas', 'angle-down']" class="mt-1 mr-2 is-pulled-right" />
                                </a>
                            </li>
                            <div class="content mb-0">
                                <ul>
                                    <li><a href="#"><font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" />Repositories</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Sources</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Source Data</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Source Data Events</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Source Ref Events</a></li>
                                </ul>
                            </div>
                            <li class="collapsible">
                                <a>
                                    <font-awesome-icon :icon="['fas', 'user-friends']" class="mt-1 mr-2" />
                                    People
                                    <font-awesome-icon :icon="['fas', 'angle-down']" class="mt-1 mr-2 is-pulled-right" />
                                </a>
                            </li>
                            <div class="content mb-0">
                                <ul>
                                    <li><NuxtLink to="/people"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> People</NuxtLink></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Person Aliases</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Person Anci</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Person Association</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Person Events</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Person LDS</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Person Subm</a></li>
                                </ul>
                            </div>
                            <li class="collapsible">
                                <a href="#">
                                    <font-awesome-icon :icon="['fas', 'heart']" class="mt-1 mr-2" />
                                    Family
                                    <font-awesome-icon :icon="['fas', 'angle-down']" class="mt-1 mr-2 is-pulled-right" />
                                </a>
                            </li>
                            <div class="content mb-0">
                                <ul>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Families</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Family Events</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Family Slugs</a></li>
                                </ul>
                            </div>
                            <li class="collapsible">
                                <a href="#">
                                    <font-awesome-icon :icon="['fas', 'thumbs-up']" class="mt-1 mr-2" />
                                    References
                                    <font-awesome-icon :icon="['fas', 'angle-down']" class="mt-1 mr-2 is-pulled-right" />
                                </a>
                            </li>
                            <div class="content mb-0">
                                <ul>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Citations</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Notes</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Places</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Types</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Authors</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Publications</a></li>
                                </ul>
                            </div>
                            <li class="collapsible">
                                <a href="#">
                                    <font-awesome-icon :icon="['fas', 'users']" class="mt-1 mr-2" />
                                    Trees
                                    <font-awesome-icon :icon="['fas', 'angle-down']" class="mt-1 mr-2 is-pulled-right" />
                                </a>
                            </li>
                            <div class="content mb-0">
                                <ul>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Show</a></li>
                                    <li><a href="#"> <font-awesome-icon :icon="['fas', 'angle-right']" class="mt-1 mr-2" /> Trees</a></li>
                                </ul>
                            </div>
                            <li>
                                <NuxtLink to="/gedcom">
                                    <font-awesome-icon :icon="['fas', 'file-import']" class="mt-1 mr-2" />
                                    GEDCOM Import
                                </NuxtLink>
                            </li>
                            <li>
                                <a href="subscription.html">
                                    <font-awesome-icon :icon="['fas', 'rocket']" class="mt-1 mr-2" />
                                    Subscription</a>
                            </li>
                            <li>
                                <a href="dnaupload.html">
                                    <font-awesome-icon :icon="['fas', 'file-upload']" class="mt-1 mr-2" />
                                    DNA Upload</a>
                            </li>
                            <li>
                                <a href="dashboard.html">
                                    <font-awesome-icon :icon="['fas', 'dna']" class="mt-1 mr-2" />
                                    DNA Matching</a>
                            </li>
                            <li>
                                <a href="videos.html">
                                    <font-awesome-icon :icon="['fas', 'video']" class="mt-1 mr-2" />
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
                    Copyright &copy; 2020 Family Tree 365 Ltd
                </footer>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    middleware: "auth",
    mounted() {
        this.collapsible();
    },
    computed: {
        ...mapGetters(['loggedInUser'])
    },
    methods: {
        async logout() {
          await this.$auth.logout();
        },
        collapsible() {
            var coll = document.getElementsByClassName('collapsible') 
            var i;
            for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                });
            }
        },
    }
}
</script>

 <style scoped>
    @import '~/assets/css/bulma.css';
    @import '~/assets/css/admin.css';
    @import '~/assets/css/fontawesome.min.css';
</style>
