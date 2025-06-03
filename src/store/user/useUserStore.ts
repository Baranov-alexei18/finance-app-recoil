import { useRecoilState } from 'recoil';

import { CategoryType } from '@/types/category';
import { GoalType } from '@/types/goal';
import { TransitionEnum, TransitionType } from '@/types/transition';

import { userErrorState, userLoadingState, userState } from './user';

export const useUserStore = () => {
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useRecoilState(userLoadingState);
  const [error, setError] = useRecoilState(userErrorState);

  const getTransactionsByType = (type: TransitionEnum): TransitionType[] => {
    if (!user?.transitions) return [];

    return user.transitions.filter((t) => t.type === type);
  };

  const getCategoriesByType = (type: TransitionEnum): CategoryType[] => {
    if (!user?.categories) return [];
    return user.categories.filter((c) => c.type === type);
  };

  const addNewTransaction = (transaction: TransitionType) => {
    if (!user) return;

    const updatedGoals = transaction.goal
      ? user.goals.map((goal) =>
          goal.id === transaction.goal?.id
            ? { ...goal, transitions: [...(goal.transitions || []), transaction] }
            : goal
        )
      : user.goals;

    setUser({
      ...user,
      transitions: [...user.transitions, transaction],
      goals: updatedGoals,
    });
  };

  const updateTransactionById = (id: string, updatedFields: Partial<TransitionType>) => {
    if (!user) return;

    const updatedTransitions = user.transitions.map((transition) =>
      transition.id === id ? { ...transition, ...updatedFields } : transition
    );

    const updatedGoals = updatedFields.goal
      ? user.goals.map((goal) =>
          goal.id === updatedFields.goal?.id
            ? {
                ...goal,
                transitions: goal.transitions?.map((t) =>
                  t.id === id ? { ...t, ...updatedFields } : t
                ),
              }
            : goal
        )
      : user.goals;

    setUser({ ...user, transitions: updatedTransitions, goals: updatedGoals });
  };

  const deleteTransactionById = (id: string) => {
    if (!user) return;

    const updatedTransitions = user.transitions.filter((t) => t.id !== id);
    const updatedGoals = user.goals.map((goal) => ({
      ...goal,
      transitions: goal.transitions?.filter((t) => t.id !== id),
    }));

    setUser({ ...user, transitions: updatedTransitions, goals: updatedGoals });
  };

  const addNewCategory = (category: CategoryType) => {
    if (!user) return;
    setUser({ ...user, categories: [...user.categories, category] });
  };

  const updateCategoryById = (id: string, updatedFields: Partial<CategoryType>) => {
    if (!user) return;

    const updatedCategories = user.categories.map((cat) =>
      cat.id === id ? { ...cat, ...updatedFields } : cat
    );

    setUser({ ...user, categories: updatedCategories });
  };

  const deleteCategoryById = (id: string) => {
    if (!user) return;
    const updatedCategories = user.categories.filter((c) => c.id !== id);
    setUser({ ...user, categories: updatedCategories });
  };

  const addNewGoal = (goal: GoalType) => {
    if (!user) return;
    setUser({ ...user, goals: [...user.goals, goal] });
  };

  return {
    user,
    loading,
    error,
    setUser,
    getTransactionsByType,
    getCategoriesByType,
    addNewTransaction,
    updateTransactionById,
    deleteTransactionById,
    addNewCategory,
    updateCategoryById,
    deleteCategoryById,
    addNewGoal,
    setLoading,
    setError,
  };
};
