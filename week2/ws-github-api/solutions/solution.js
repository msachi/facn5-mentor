var githubHandle = "m4v15";

/* helper functions */

function getLanguages(arr) {
  return arr
    .map(function (obj) {
      return obj.language;
    })
    .reduce(function (languageList, currentLanguage) {
      if (currentLanguage && !languageList.includes(currentLanguage)) {
        return languageList.concat([currentLanguage])
      }
      return languageList
    }, []);
}

function countStars(arr) {
  return arr.reduce(function (acc, current) {
    return acc + current.stargazers_count;
  }, 0);
}

function getUsername(user) {
  return user.login;
}

/* success handlers - functions that get used with the response from the request */

function extractUserDetails(response) {
  return {
    userDetails: {
      img: response[0].owner.avatar_url,
      repos: response.length,
      languages: getLanguages(response),
      stars: countStars(response)
    },
    firstRepo: {
      name: response[0].name,
      url: response[0].html_url,
      created: response[0].created_at.substr(0, 10),
      issues: response[0].open_issues,
      watchers: response[0].watchers,
      contributors_url: response[0].contributors_url,
      contributors: []
    }
  };
}

function extractContributorDetails(response) {
  var contributors = response.map(getUsername);
  return contributors;
}

/* generic request function, can be recycled over and over! */

function request(url, cb) {
  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (result) {
      return cb(result)
    }).catch(function (err) {
      return console.log(err)
    })

}

/* getUserRepoDetails calls extractUserDetails, passing it the results from the fetch request, and then passes the results from extractUserDetails into updateDOMWithUserDetails and also into getContributorsToFirstRepo */

function getUserRepoDetails(handle) {
  var url = "https://api.github.com/users/" + handle + "/repos";
  request(url, function (result) {
    const formattedUserDetails = extractUserDetails(result)

    updateDOMWithUserDetails(formattedUserDetails)

    getContributorsToFirstRepo(formattedUserDetails);
    return;
  });
}

/* getContributorsToFirstRepo passes the user's first repo URL into the fetch request, passing the results into extractContributorDetails, which in turn passes its results into updateDOMWithContributors */

function getContributorsToFirstRepo(userDetails) {
  var url = userDetails.firstRepo.contributors_url;
  request(url, function (result) {
    var contributors = extractContributorDetails(result);
    updateDOMWithContributors(contributors)
    return;
  });
}

/* UPDATE DOM FUNCTIONS
updateDOMWithUserDetails updates the HTML with the user's details as extracted from the first fetch */
function updateDOMWithUserDetails(userDetails) {
  document.getElementById("github-user-handle").textContent = githubHandle;
  document.getElementById("github-user-link").href =
    "https://github.com/" + githubHandle;
  document.getElementById("github-user-avatar").src = userDetails.userDetails.img;
  document.getElementById("github-user-repos").textContent =
    userDetails.userDetails.repos;
  document.getElementById(
    "github-repos-languages"
  ).textContent = userDetails.userDetails.languages.join(", ");
  document.getElementById("github-repos-stars").textContent =
    userDetails.userDetails.stars;
  document.getElementById("github-repo-name").textContent = userDetails.firstRepo.name;
  document.getElementById("github-repo-link").href = userDetails.firstRepo.url;
  document.getElementById("github-repo-created").textContent =
    userDetails.firstRepo.created;
  document.getElementById("github-repo-open-issues").textContent =
    userDetails.firstRepo.issues;
  document.getElementById("github-repo-watchers").textContent =
    userDetails.firstRepo.watchers;
  return;
}

/*updateDOMWithContributors updates the HTML with the contributors' details as extracted from the second fetch */

function updateDOMWithContributors(contributors) {
  document.getElementById(
    "github-repo-contributors"
  ).textContent = contributors.join(", ");
  return;
}

// This is calls the first request, setting of the chain of events to populate the page
getUserRepoDetails(githubHandle);
