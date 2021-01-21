export const getEmail = state => state.auth.email
export const getToken = state => state.auth.jwtToken
export const getIsReady = state => state.auth.isReady
export const getErrors = state => state.errors
export const getTodosData = state => state.todos.todosData
export const getCurrentTodo = state => state.todos.currentTodo
export const getRoutes = state => state.routes
export const getIcons = state => state.library.icons
export const getThemes = state => state.library.themes
export const getColors = state => state.library.colors
export const getBookmarks = state => state.bookmarks
export const getModalOpen = state => state.todos.isModalOpen