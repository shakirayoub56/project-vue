<template>
  <div class="content-wrapper">
    <!--    <div class="content-wrapper" style="min-height: 2838.62px;">-->

    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>404 Error Page</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <router-link to="/homepage">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
              </router-link>
              <li class="breadcrumb-item active ml-4">404 Error Page</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="error-page">
        <h2 class="headline text-warning"> 404</h2>
        <div class="error-content">
          <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>
          <p>
            We could not find the page you were looking for.
            Meanwhile, you may <router-link to="/homepage"> <a href="#">return to Homepage</a> </router-link> or try using the search form.
          </p>
          <form class="search-form">
            <div class="input-group">
              <input type="text" name="search" class="form-control" placeholder="Search">
              <div class="input-group-append">
                <button type="submit" name="submit" class="btn btn-warning"><i class="fas fa-search"></i>
                </button>
              </div>
            </div>

          </form>
        </div>

      </div>

    </section>

  </div>
  <!--    <p>404 Error ? page not found-->
  <!--      <router-link  to="/homepage"> Home-->
  <!--      </router-link>-->
  <!--    </p>-->
  <!--  </div>-->
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>