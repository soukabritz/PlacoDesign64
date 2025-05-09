import React, { useEffect, useState } from 'react';
import { useAuth } from '../../authContext';
import RealisationForm from './RealisationForm';
import './realisationsPage.scss';

const RealisationsPage = () => {
  const [realisations, setRealisations] = useState([]);
  const { isAuth } = useAuth();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editReal, setEditReal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const fetchRealisations = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/realisations');
      const data = await res.json();
      setRealisations(data);
    } catch {
      setRealisations([]);
    }
  };

  useEffect(() => {
    fetchRealisations();
  }, []);

  const handleAdd = async (formData) => {
    setIsLoading(true);
    setError('');
    const data = new FormData();
    data.append('titre', formData.titre);
    data.append('description', formData.description);
    data.append('showOnHome', formData.showOnHome);
    if (formData.image) {
      data.append('image', formData.image);
    }
    try {
      const res = await fetch('http://localhost:3001/api/realisations', {
        method: 'POST',
        credentials: 'include',
        body: data
      });
      if (!res.ok) {
        const errData = await res.json();
        setError(errData.message || 'Erreur lors de l\'ajout');
      } else {
        setShowAddModal(false);
        fetchRealisations();
      }
    } catch {
      setError('Erreur de connexion au serveur');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (real) => {
    setEditReal(real);
    setShowEditModal(true);
  };

  const handleEditSubmit = async (formData) => {
    setIsLoading(true);
    setError('');
    const data = new FormData();
    data.append('titre', formData.titre);
    data.append('description', formData.description);
    data.append('showOnHome', formData.showOnHome);
    if (formData.image) {
      data.append('image', formData.image);
    }
    try {
      const res = await fetch(`http://localhost:3001/api/realisations/${editReal._id}`, {
        method: 'PUT',
        credentials: 'include',
        body: data
      });
      if (!res.ok) {
        const errData = await res.json();
        setError(errData.message || 'Erreur lors de la modification');
      } else {
        setShowEditModal(false);
        setEditReal(null);
        fetchRealisations();
      }
    } catch {
      setError('Erreur de connexion au serveur');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch(`http://localhost:3001/api/realisations/${deleteId}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      if (!res.ok) {
        const errData = await res.json();
        setError(errData.message || 'Erreur lors de la suppression');
      } else {
        setShowDeleteConfirm(false);
        setDeleteId(null);
        fetchRealisations();
      }
    } catch {
      setError('Erreur de connexion au serveur');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="realisations-page-container">
      <h2 className="realisations-title">Nos réalisations</h2>
      {isAuth && (
        <button className="add-btn" onClick={() => setShowAddModal(true)}>Ajouter une réalisation</button>
      )}
      {showAddModal && (
        <RealisationForm
          onSubmit={handleAdd}
          onClose={() => setShowAddModal(false)}
          isLoading={isLoading}
        />
      )}
      {showEditModal && editReal && (
        <RealisationForm
          onSubmit={handleEditSubmit}
          onClose={() => { setShowEditModal(false); setEditReal(null); }}
          initialValues={editReal}
          isLoading={isLoading}
        />
      )}
      {showDeleteConfirm && (
        <div className="realisation-form-modal">
          <div className="realisation-form" style={{textAlign:'center'}}>
            <p>Confirmer la suppression de cette réalisation ?</p>
            <div className="form-actions">
              <button className="cancel-btn" onClick={() => setShowDeleteConfirm(false)}>Annuler</button>
              <button className="delete-btn" onClick={confirmDelete} disabled={isLoading}>{isLoading ? 'Suppression...' : 'Supprimer'}</button>
            </div>
          </div>
        </div>
      )}
      {error && <div className="form-error" style={{textAlign:'center',marginBottom:'1rem'}}>{error}</div>}
      <div className="realisations-list">
        {realisations.map((real) => (
          <div key={real._id} className="realisation-card">
            <img src={real.imageUrl} alt={real.titre} className="realisation-img" />
            <div className="realisation-info">
              <h3>{real.titre}</h3>
              {real.description && <p>{real.description}</p>}
              {isAuth && (
                <div className="admin-actions">
                  <button className="edit-btn" onClick={() => handleEdit(real)}>Modifier</button>
                  <button className="delete-btn" onClick={() => handleDelete(real._id)}>Supprimer</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealisationsPage; 