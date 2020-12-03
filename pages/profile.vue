<template>
    <div>
       <div class="card">
            <header class="card-header">
                <p class="card-header-title is-4 is-centered title">
                Profile
                </p>
              <NuxtLink to="/people" class="is-size-6 is-flex has-text-link has-text-weight-medium mb-2 card-header-icon">
                <font-awesome-icon :icon="['fas', 'angle-left']" class="mt-1 mr-2" />Back</NuxtLink>
            </header>
            <div class="card-content">
            	<section class="section is-main-section">
            		<div class="tile is-ancestor">
            			<div class="tile is-parent">
            				<div class="card tile is-child">
            					<header class="card-header">
            						<p class="card-header-title">
            							<span class="icon"><i class="mdi mdi-account-circle default"></i></span><span>Edit Profile</span>
            						</p><!---->
            					</header>
            					<div class="card-content">
            						<form>
            							<div class="field is-horizontal">
            								<div class="field-label is-normal">
            									<label class="label">Avatar</label>
            								</div>
            								<div class="field-body">
            									<div class="field"><!---->
            										<div class="field file"><!---->
            											<div class="file is-success">
														    <label class="file-label">
														      <input class="file-input" type="file" name="resume">
														      <span class="file-cta">
														        <span class="file-icon">											
														        <font-awesome-icon :icon="['fas', 'upload']"/>
														        </span>
														        <span class="file-label">
														          Upload Avatar
														        </span>
														      </span>
														    </label>
														  </div>
            										</div><!---->
            									</div>
            								</div><!---->
            							</div>
            							<hr>
            							<div class="field is-horizontal">
            								<div class="field-label is-normal">
            									<label class="label">First Name</label>
            								</div>
            								<div class="field-body">
            									<div class="field"><!---->
            										<div class="control">
            											<input type="text" autocomplete="on" name="name" required="required" class="input"><!----><!----><!---->
            										</div>
            										<p class="help"> Required. Your name <!----></p>
            									</div>
            								</div><!---->
            							</div>
            							<div class="field is-horizontal">
            								<div class="field-label is-normal">
            									<label class="label">Last Name</label>
            								</div>
            								<div class="field-body">
            									<div class="field"><!---->
            										<div class="control">
            											<input type="text" autocomplete="on" name="name" required="required" class="input"><!----><!----><!---->
            										</div>
            										<p class="help"> Required. Your name <!----></p>
            									</div>
            								</div><!---->
            							</div>
            							<div class="field is-horizontal">
            								<div class="field-label is-normal">
            									<label class="label">E-mail</label>
            								</div>
            								<div class="field-body">
            									<div class="field"><!---->
            										<div class="control">
            											<input type="email" autocomplete="on" name="email" required="required" class="input"><!----><!----><!---->
            										</div>
            										<p class="help"> Required. Your e-mail <!----></p>
            									</div>
            								</div><!---->
            							</div><hr>
            							<div class="field is-horizontal">
            								<div class="field-label is-normal"><!---->
            									
            								</div>
            								<div class="field-body">
            									<div class="field"><!---->
            										<div class="control">
            											<button type="submit" class="button is-link has-background-primary"> Submit </button>
            										</div><!---->
            									</div>
            								</div><!---->
            							</div>
            						</form>
            					</div><!---->
            				</div>
            			</div>
            			<div class="tile is-parent">
            				<div class="card tile is-child">
            					<header class="card-header">
            						<p class="card-header-title">
            							<span class="icon"><i class="mdi mdi-account default"></i></span><span>Profile</span>
            						</p><!---->
            					</header>
            					<div class="card-content">
            						<figure class="image is-128x128 is-flex is-justify-content-center"><img class="is-rounded" src="~assets/images/avatar.jpg" width="150" alt="">
            						</figure>
            						<hr>
            						<div class="field">
            							<label class="label">First Name</label>
            							<div class="control is-clearfix">
            								<input type="text" autocomplete="on" value="pintu" readonly="readonly" class="input is-static"><!----><!----><!---->
            							</div><!---->
            						</div>
            						<div class="field">
            							<label class="label">Last Name</label>
            							<div class="control is-clearfix">
            								<input type="text" autocomplete="on" value="Kalasva" readonly="readonly" class="input is-static"><!----><!----><!---->
            							</div><!---->
            						</div>
            						<div class="field">
            							<label class="label">E-mail</label>
            							<div class="control is-clearfix">
            								<input type="text" autocomplete="on" value="pintu1997.kalasva@gmail.com" readonly="readonly" class="input is-static"><!----><!----><!---->
            							</div><!---->
            						</div>
            					</div><!---->
            				</div>
            			</div>
            		</div>
            		<div class="card">
            			<header class="card-header">
            				<p class="card-header-title">
            					<span class="icon"><i class="mdi mdi-lock default"></i></span>
            					<span>Change Password</span>
            				</p><!---->
            			</header>
            			<div class="card-content">
            				<form>
            					<div class="field is-horizontal">
            						<div class="field-label is-normal">
            							<label class="label">Current password</label>
            						</div>
            						<div class="field-body">
            							<div class="field"><!---->
            								<div class="control">
            									<input type="password" autocomplete="on" name="password_current" required="required" autcomplete="current-password" class="input"><!----><!----><!---->
            								</div>
            								<p class="help"> Required. Your current password <!----></p>
            							</div>
            						</div><!---->
            					</div><hr>
            					<div class="field is-horizontal">
            						<div class="field-label is-normal">
            							<label class="label">New password</label>
            						</div>
            						<div class="field-body">
            							<div class="field"><!---->
            								<div class="control">
            									<input type="password" autocomplete="new-password" name="password" required="required" class="input"><!----><!----><!---->
            								</div>
            								<p class="help"> Required. New password <!----></p>
            							</div>
            						</div><!---->
            					</div>
            					<div class="field is-horizontal">
            						<div class="field-label is-normal">
            							<label class="label">Confirm password</label>
            						</div>
            						<div class="field-body">
            							<div class="field"><!---->
            								<div class="control">
            									<input type="password" autocomplete="new-password" name="password_confirmation" required="required" class="input"><!----><!----><!---->
            								</div>
            								<p class="help"> Required. New password one more time <!----></p>
            							</div>
            						</div><!---->
            					</div><hr>
            					<div class="field is-horizontal">
            						<div class="field-label is-normal"><!---->
            							
            						</div>
            						<div class="field-body">
            							<div class="field"><!---->
            								<div class="control">
            									<button type="submit" class="button is-link has-background-primary"> Submit </button>
            								</div><!---->
            							</div>
            						</div><!---->
            					</div>
            				</form>
            			</div><!---->
            		</div>
            	</section>
            </div>
        </div>
            
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    layout: 'auth',
    data() {
        return {
            error: false,
            message: "",
            people: {
                name: "",
            }
        };
    },
    computed: {
        ...mapGetters(['loggedInUser'])
    },
}
</script>
