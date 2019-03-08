/* let's go! */
function fetchData(url, cb) {
  fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      cb(data)
    })
}

function getUserData() {
  fetchData('https://api.github.com/users/msachi',
    function(data) {
      document.getElementById('github-user-handle').textContent = data.login
      document.getElementById('github-user-avatar').src = data.avatar_url
      document.getElementById('github-user-repos').textContent = data.public_repos
    }
  )
}

function getRepoData() {
  fetchData('https://api.github.com/users/msachi/repos',
    function(data) {
      var languages = data
        .map(function(repo) {
          return repo.language
        })
        .reduce(function(acc, curr) {
          if(curr && acc.indexOf(curr) < 0) {
            acc.push(curr)
          }
          return acc
        }, [])
      var stars = data
        .map(function(repo) {
          return repo.stargazers_count
        })
        .reduce(function(acc, curr) {
          if(curr) {
            acc += curr
          }
          return acc
        })
      document.getElementById('github-repos-languages').textContent = languages.join(', ')
      document.getElementById('github-repos-stars').textContent = stars.toString()
      getTopRepoData(data[0])
    }
  )
}

function getTopRepoData(repo) {
  fetchData('https://api.github.com/repos/msachi/' + repo.name + '/contributors',
    function(data) {
      var contributors = data.map(function(con) {
        return con.login
      })
      document.getElementById('github-repo-name').textContent = repo.name
      document.getElementById('github-repo-created').textContent = repo.created_at
      document.getElementById('github-repo-open-issues').textContent = repo.open_issues_count
      document.getElementById('github-repo-watchers').textContent = repo.watchers_count
      document.getElementById('github-repo-contributors').textContent = contributors.join(', ')
    }
  )
}

getUserData()
getRepoData()