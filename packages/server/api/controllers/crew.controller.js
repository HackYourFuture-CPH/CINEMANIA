const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getCrewOfMovieByID = async (id) => {
  if (isNaN(id)) {
    throw new HttpError('ID should be a number', 400);
  }

  const crew = await knex
    .select(
      'crew_members.id',
      'full_name',
      'birth_date',
      'image_location',
      'role',
    )
    .from('movie_crew')
    .join('crew_members', 'movie_crew.crew_member_id', '=', 'crew_members.id')
    .where({
      movie_id: id,
      role: 'Actor',
    });

  return crew;
};

module.exports = {
  getCrewOfMovieByID,
};
